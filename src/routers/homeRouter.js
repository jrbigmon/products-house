const express = require('express');
const router = express.Router();
const homeController = require('../controller/homeController');

router.get('/', homeController.landingPage);
router.get('/carrinho', homeController.carrinho);
router.get('/login', homeController.login);
router.get('/cadastrar', homeController.cadastro);

module.exports = router;