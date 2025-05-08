var explorerModel = require("../models/explorerModel")

function listar(req, res) {

    explorerModel.listar()
        // se a busca por esses dados der tudo certo
        .then(

            resultado => {
                res.status(200).json(resultado)
            }
        ).catch(
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

function listarComentario(req, res) {

    var idPostComentario = req.params.idPost

    explorerModel.listarComentario(idPostComentario)

        .then(resultado => {
            res.status(200).json(resultado)
        }
        ).catch(
            function (erro) {
                console.log(erro)
                console.log(
                    "\nHouve um erro ao realizar a busca de dados dos comentarios dos Posts! Erro: ",
                    erro.sqlMessage
                )
                res.status(500).json(erro.sqlMessage)
            }
        )
}

module.exports = {
    listar,
    listarComentario
}