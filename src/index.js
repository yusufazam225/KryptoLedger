import express from 'express'
import dotenv from 'dotenv'
import routes from './routes/routes.js'
import connectDB from './db/index.js'
import { swaggerUi, swaggerSpec } from './swagger.js'

import cors from 'cors';

const app=express();

dotenv.config({
    path:'./.env'
})

const corsOptions = {
    origin: 'http://ec2-52-62-104-194.ap-southeast-2.compute.amazonaws.com:3000',
    optionsSuccessStatus: 200 
};

app.use(cors(corsOptions));
app.use(express.json());
app.use('/api',routes);
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));
connectDB().then(()=>{
    app.listen(process.env.PORT || 8000,()=>{
        console.log(`server is running at ${process.env.PORT}`);
    })
}).catch((error)=>
{
    console.log(`error in while connecting db:${error}`);
})
