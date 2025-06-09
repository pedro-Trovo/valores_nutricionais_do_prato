import express from 'express';
import { geminiController } from '../controller/geminiController.js';
import multer from 'multer';
import path from 'path';

const router = express.Router();

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'assets');
  },
  filename: (req, file, cb) => {
    const ext = path.extname(file.originalname);
    const customName = `myDish${ext}`;
    cb(null, customName);
  },
});

const upload = multer({ storage });

router.post(
  '/analyze',
  upload.single('foodImage'),
  geminiController.analyzeDish
);

export default router;
