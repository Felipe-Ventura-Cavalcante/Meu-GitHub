var curtidaModel = require("../models/curtidaModel")

function curtida(req, res) {

    var idUsuario = req.body.idUsuarioServer
    var idPost = req.body.idPostServer
    var quem_postou = req.body.quem_postouServer


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

function qtd_Curtida(req, res) {
    var idPostCurtida = req.params.idPost

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

function deletaCurtida(req, res) {

    var idPostDel = req.body.idPostServer
    var idUsuarioDel = req.body.idUsuarioServer

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
module.exports = {
    curtida,
    qtd_Curtida,
    deletaCurtida
}