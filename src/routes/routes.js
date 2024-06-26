import express from 'express'
const router=express.Router()
import multer from 'multer'
import {uploadCSV,getfinalBalance} from './../controllers/controllers.js';
const upload=multer({dest:'uploads/'});
router.post('/upload',upload.single('file'),uploadCSV);
router.post('/getfinalBalance',getfinalBalance);

export default router;