import mongoose from 'mongoose';
//connecting database
const connectDB=async()=>{
    try{
        const connectMongo=await mongoose.connect(process.env.MONGODB_URL);
        console.log(`host is :${connectMongo.connection.host}`);
    }
    catch(error){
        console.log(`the error is in connection:${error}`);
        process.exit(1);
    }
}
export default connectDB;