import express from 'express'
const router=express.Router();

router.post('/upload',upload.single('file'),uploadCSV);
router.post('/finalBalance',getfinalBalance);

export default router;