const produtoModel = require('../models/produtoModel')

const homeController = {
    landingPage: (req, res) => {
        const produtos = produtoModel.findAll();
        return res.render('./home/landingpage', {produtos});
    }, 
    carrinho: (req, res) => {
        return res.render('./home/carrinho');
    },
    login: (req, res) => {
        return res.render('./home/login');
    },
    cadastro: (req, res) => {
        return res.render('./home/cadastro');
    }
}

module.exports = homeController