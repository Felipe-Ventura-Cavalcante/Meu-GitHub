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

    if (idPostComentario == undefined) {
        res.status(400).sendo("Seu idPostComentario está indefinido")
    } else {

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
}


function novo_comentario(req, res) {


    var idUsuario_novo = Number(req.body.idUsuarioServer)
    var idPost = Number(req.body.idPostServer)
    var quem_postou = Number(req.body.quem_postouServer)
    var novo_comentarioVar = req.body.novo_comentarioServer

    if (idUsuario_novo == undefined) {
        res.status(400).sendo("Seu idUsuario_novo está indefinido")
    } else if (idPost == undefined) {
        res.status(400).sendo("Seu idPost está indefinido")
    } else if (quem_postou == undefined) {
        res.status(400).sendo("Seu quem_postou está indefinido")
    } else if (novo_comentarioVar == undefined) {
        res.status(400).sendo("Seu novo_comentarioVar está indefinido")
    } else {

        // a ordem da criação das variaveis importa
        explorerModel.novo_comentario(idUsuario_novo, idPost, quem_postou, novo_comentarioVar)

            .then(
                function (resultado) {
                    res.json(resultado)
                }
            ).catch(
                function (erro) {
                    console.log(erro);
                    console.log(
                        "\nHouve um erro ao realizar um novo comentário! Erro: ",
                        erro.sqlMessage
                    );
                    res.status(500).json(erro.sqlMessage)
                }
            )
    }
}

module.exports = {
    listar,
    listarComentario,
    novo_comentario
}