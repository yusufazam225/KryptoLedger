import express from 'express'
import dotenv from 'dotenv'
import connectDB from './db/index.js'
dotenv.config({
    path:'./.env'
})
const app=express();
connectDB().then(()=>{
    app.listen(process.env.PORT || 8000,()=>{
        console.log(`server is running at ${process.env.PORT}`);
    })
}).catch((error)=>
{
    console.log(`error in while connecting db:${error}`);
})