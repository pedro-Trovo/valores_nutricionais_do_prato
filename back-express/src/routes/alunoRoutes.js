import express from 'express';
import { alunoController } from '../controller/alunoController.js';

const router = express.Router();

router.post('/', alunoController.create);
router.post('/login', alunoController.login);
router.get('/', alunoController.getAll);
router.get('/:id', alunoController.getById);
router.put('/:id', alunoController.update);
router.delete('/:id', alunoController.delete);

export default router;
