var perfilModel = require("../models/perfilModel")

function atualizarDesc(req, res) {

    var idUsuario = req.body.idUsuarioServer;
    var novaDescricao = req.body.descricaoServer;

    if (idUsuario == undefined) {
        res.status(400).sendo("Seu idUsuario está indefinido")
    } else if (novaDescricao == undefined) {
        res.status(400).sendo("Seu novaDescricao está indefinido")
    } else {

        perfilModel.atualizarDesc(novaDescricao, idUsuario)

            .then(
                function (resultado) {
                    res.json(resultado)
                }
            ).catch(
                function (erro) {
                    console.log(erro);
                    console.log(
                        "\nHouve um erro ao realizar o cadastro! Erro: ",
                        erro.sqlMessage
                    );
                    res.status(500).json(erro.sqlMessage)
                }
            )
    }
}

function listar(req, res) {
    var id = req.params.id

    if (id == undefined) {
        res.status(400).sendo("Seu id está indefinido")
    } else {

        perfilModel.listar(id)

            .then(resultado => {
                res.status(200).json(resultado)
            }).catch(
                function (erro) {
                    console.log(erro)
                    console.log(
                        "\nHouve um erro ao realizar a busca de dados dos Posts! Erro: ",
                        erro.sqlMessage
                    )
                    res.status(500).json(erro.sqlMessage)
                }
            )
    }
}

function enviarFotoPerfil(req, res) {

    if (!req.file) {
        return res.status(400).send("Arquivo de imagem não enviado.");
    } else {


        var imagem = req.file.filename;

        var idUsuario = req.body.idUsuario

        var newPost = { idUsuario, imagem }

        perfilModel.enviarFotoPerfil(newPost)
            .then(resultado => {
                res.status(201).send("Usuario criado com sucesso");
            }).catch(err => {
                res.status(500).send(err);
            });
    }
}

function atualizarInfo(req, res) {
    var id = req.params.idUsuario

    if (id == undefined) {
        res.status(400).sendo("Seu id está indefinido")
    } else {

        perfilModel.atualizarInfo(id)

            .then(resultado => {
                res.status(200).json(resultado)
            }).catch(
                function (erro) {
                    console.log(erro)
                    console.log(
                        "\nHouve um erro ao realizar a busca de novas info do usuario na tela de perfil! Erro: ",
                        erro.sqlMessage
                    )
                    res.status(500).json(erro.sqlMessage)
                }
            )
    }
}

function visitar(req, res) {
    var id = req.params.idVisitante

    if (id == undefined) {
        res.status(400).sendo("Seu id está indefinido")
    } else {

        perfilModel.visitar(id)

            .then(resultado => {
                res.status(200).json(resultado)
            }).catch(
                function (erro) {
                    console.log(erro)
                    console.log(
                        "\nHouve um erro ao realizar a busca de dados de um perfil visitante! Erro: ",
                        erro.sqlMessage
                    )
                    res.status(500).json(erro.sqlMessage)
                }
            )
    }
}

module.exports = {
    atualizarDesc,
    listar,
    enviarFotoPerfil,
    atualizarInfo,
    visitar
}