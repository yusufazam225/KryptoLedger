import  mongoose  from "mongoose";
const schema=new mongoose.schema({
    utc_time:{type:Date,required:true},
    operation:{type:String,enum:['buy','sell'],require:true},
    market: { type: String, required: true },
    base_coin: { type: String, required: true },
    quote_coin: { type: String, required: true },
    amount: { type: Number, required: true },
    price: { type: Number, required: true }
});
const Sample=mongoose.model('Sample',schema);
export default Sample;