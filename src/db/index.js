import mongoose from 'mongoose';

const connectDB=async()=>{
    try{
      // console.log(process.env.MONGODB_URL);
        const connectMongo=await mongoose.connect(process.env.MONGODB_URL);
        console.log(`host is :${connectMongo.connection.host}`);
    }
    catch(error){
        console.log(`the error is in connection:${error}`);
        process.exit(1);
    }
}
export default connectDB;