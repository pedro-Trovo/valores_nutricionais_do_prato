import express from 'express';
import { geminiController } from '../controller/geminiController.js';

const router = express.Router();

router.post('/analyze', geminiController.analyzeDish);

export default router;
