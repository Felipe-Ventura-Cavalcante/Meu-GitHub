var curtidaModel = require("../models/curtidaModel")

function curtida(req, res) {

    var idUsuario = req.body.idUsuarioServer
    var idPost = req.body.idPostServer
    var quem_postou = req.body.quem_postouServer

    if (idUsuario == undefined) {
        res.status(400).sendo("Seu idUsuario está indefinido")
    } else if (idPost == undefined) {
        res.status(400).send("Seu idPost está indefinido")
    } else if (quem_postou == undefined) {
        res.status(400).send("Seu quem_postou está indefinda")
    } else {

    curtidaModel.curtida(idUsuario, idPost, quem_postou)

        .then(
            function (resultado) {
                res.json(resultado)
            }
        ).catch(
            function (erro) {
                console.log(erro);
                console.log(
                    "\nHouve um erro ao realizar a curtida! Erro: ",
                    erro.sqlMessage
                );
                res.status(500).json(erro.sqlMessage)
            }
        )
    }
}

function qtd_Curtida(req, res) {
    var idPostCurtida = req.params.id

    if (idPostCurtida == undefined) {
        res.status(400).sendo("Seu idPostCurtida está indefinido")
    } else {

    curtidaModel.qtd_Curtida(idPostCurtida)
        .then(
            function (resultado) {
                res.json(resultado)
            }
        ).catch(
            function (erro) {
                console.log(erro)
                console.log(
                    "\nHouve um erro ao realizar a lista de quantidade de curtidas! Erro: ",
                    erro.sqlMessage
                );
                res.status(500).json(erro.sqlMessage)
            }
        )
    }
}

function deletaCurtida(req, res) {

    var idPostDel = req.body.idPostServer
    var idUsuarioDel = req.body.idUsuarioServer

    if (idPostDel == undefined) {
        res.status(400).sendo("Seu idPostDel está indefinido")
    } else if (idUsuarioDel == undefined) {
        res.status(400).send("Seu idUsuarioDel está indefinido")
    } else {

    curtidaModel.deletaCurtida(idPostDel, idUsuarioDel)
        .then(resposta => {
            res.status(200).json(resposta)
        }).catch(
            function (erro) {
                console.log(erro)
                console.log(
                    "\nHouve um erro ao realizar a lista de quantidade de curtidas! Erro: ",
                    erro.sqlMessage
                );
                res.status(500).json(erro.sqlMessage)
            }
        )
    }
}

function listaCurtida(req, res) {

    var idUsuarioAtual = req.params.idUsuario

    if (idUsuarioAtual == undefined) {
        res.status(400).sendo("Seu idUsuarioAtual está indefinido")
    } else {

    curtidaModel.listaCurtida(idUsuarioAtual)

        .then(resultado =>
            res.status(200).json(resultado)
        ).catch(
            function (erro) {
                console.log(erro)
                console.log(
                    "\nHouve um erro ao realizar a listar curtidas! Erro: ",
                    erro.sqlMessage
                )
                res.status(500).json(erro.sqlMessage)
            }
        )
    }
}

module.exports = {
    curtida,
    qtd_Curtida,
    deletaCurtida,
    listaCurtida
}