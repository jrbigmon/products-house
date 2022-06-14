const produtoModel = require('../models/produtoModel');

const produtoController = {

    index: (req, res) => {
        const {id} = req.params
        const produto = produtoModel.findById(id)
        res.render('./adm/produtos/index', {produto})
    },
    showCadastrar: (req, res) => {
        res.render('./adm/produtos/cadastrar');
    },
    cadastrar: (req, res) => {
        const {imagem} = req.file.filename;
        const {nome, preco, ativo, descricao} = req.body
        produtoModel.save(imagem, nome, preco, ativo, descricao);
        res.redirect('/adm/produtos/');
    },
    showEditar: (req, res) => {
        res.render('./adm/produtos/editar');
    },
    listar: (req, res) => {
        const produtos = produtoModel.findAll();
        res.render('./adm/produtos/listar', {produtos});
    }
    
}
module.exports = produtoController;