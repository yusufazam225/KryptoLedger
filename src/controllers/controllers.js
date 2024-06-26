import fs from 'fs'
import csv from 'csv-parser'
import sample from '../models/models.js'

export const uploadCSV=(req,res)=>{
    console.log(1);
    const filePath=req.file.path;
    const samples=[];
    //Read the csv file and parse its content
    fs.createReadStream(filePath).pipe(csv())
    .on('data',(row)=>{
        const [crypto,currency]=row.Market.split('/');
        const amount = parseFloat(row['Buy/Sell Amount']);
      const price = parseFloat(row.Price);
      
      
      if(!isNaN(amount) && !isNaN(price))
      {

      
        samples.push({
            utc_time:new Date(row.UTC_Time),
            operation:row.Operation.toLowerCase(),
            market:row.Market,
            crypto,
            currency,
            amount,
            price,
            user_id:row.User_ID
        })
    }
    else{
        console.log('cant be done');
    }
    }).on('end',async()=>{
        await sample.insertMany(samples);
        res.status(200).send({message:'Data stored Succesfully'});
        fs.unlinkSync(filePath);
    })
}

export const getfinalBalance = async (req, res) => {
    const { timestamp } = req.body; // Extract timestamp from the request body
    const date = new Date(timestamp); // Convert timestamp to Date object
  
    // Find all trades that occurred on or before the given timestamp
    const samples = await sample.find({ utc_time: { $lte: date } });
  
    // Calculate balances of each asset
    const balances = samples.reduce((acc, sample) => {
      const { crypto, operation, amount } = sample;
      if (!acc[crypto]) acc[crypto] = 0;
      acc[crypto] += operation === 'buy' ? amount : -amount;
      return acc;
    }, {});
  
    // Send the calculated balances as the response
    res.status(200).json(balances);
  };
  