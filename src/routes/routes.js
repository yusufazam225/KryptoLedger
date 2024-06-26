// routes/users.js

import express from 'express';
const router = express.Router();
import upload from './../middleware/middleware.multer.js';
import { uploadCSV, getfinalBalance } from './../controllers/controllers.js';


/**
 * @swagger
 * /api/upload:
 *   post:
 *     summary: Upload a CSV file
 *     description: Upload a CSV file and process it.
 *     requestBody:
 *       required: true
 *       content:
 *         multipart/form-data:
 *           schema:
 *             type: object
 *             properties:
 *               file:
 *                 type: string
 *                 format: binary
 *     responses:
 *       '200':
 *         description: File uploaded and processed successfully.
 *       '400':
 *         description: Invalid file format.
 */
router.post('/upload', upload.single('file'), uploadCSV);


/**
 * @swagger
 * /api/getfinalBalance:
 *   post:
 *     summary: Get final balance
 *     description: Calculate and return the final balance based on the uploaded CSV data.
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               timestamp:
 *                 type: string
 *                 example: "2022-09-28 12:00:00"
 *     responses:
 *       200:
 *         description: Final balance calculated successfully.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 BTC:
 *                   type: number
 *                   example: 15
 *       400:
 *         description: Error in calculation.
 */
router.post('/getfinalBalance', getfinalBalance);

export default router;
