import  mongoose  from "mongoose";
const schema=new mongoose.Schema({
    utc_time:{type:Date,required:true},
    operation:{type:String,enum:['buy','sell'],require:true},
    market: { type: String, required: true },
    crypto:{type:String,required:true},
    currency:{type:String,required:true},
   user_id:{type:Number,required:true},
    amount: { type: Number, required: true },
    price: { type: Number, required: true }
});
const Sample=mongoose.model('Sample',schema);
export default Sample;