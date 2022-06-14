const express = require('express');
const router = express.Router();
const produtoController = require('../controller/produtoController');

router.get('/adm/produtos', produtoController.listar);
router.get('/adm/produtos/cadastro', produtoController.showCadastrar);
router.get('/adm/produtos/:id/editar', produtoController.showEditar);
router.get('/adm/produtos/:id', produtoController.index)
module.exports = router;