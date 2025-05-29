const express = require('express');
const router = express.Router();
const alunoController = require('../controller/alunoController');

router.get('/', alunoController.getAll);
router.get('/:id', alunoController.getById);
router.post('/', alunoController.create);
router.put('/:id', alunoController.update);
router.delete('/:id', alunoController.delete);
router.post('/login', alunoController.login);


module.exports = router;
