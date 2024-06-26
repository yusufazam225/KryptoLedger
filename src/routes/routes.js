import express from 'express'
const router=express.Router()
import upload from './../middleware/middleware.multer.js';
import {uploadCSV,getfinalBalance} from './../controllers/controllers.js';


router.post('/upload',upload.single('file'),uploadCSV);
router.post('/getfinalBalance',getfinalBalance);

export default router;