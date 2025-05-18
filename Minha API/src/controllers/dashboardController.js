var dashboardModel = require("../models/dashboardModel");

function post(req, res) {

    var idUsuario = req.params.id


    dashboardModel.post(idUsuario)

        .then(
            function (resultado) {
                res.json(resultado)
            }
        ).catch(
            function (erro) {
                console.log(erro);
                console.log(
                    "\nHouve um erro ao realizar a lista de post! Erro: ",
                    erro.sqlMessage
                );
                res.status(500).json(erro.sqlMessage)
            }
        )
}

function curtida(req, res) {

    var idUsuario = req.params.id


    dashboardModel.curtida(idUsuario)

        .then(
            function (resultado) {
                res.json(resultado)
            }
        ).catch(
            function (erro) {
                console.log(erro);
                console.log(
                    "\nHouve um erro ao realizar a lista de curtida! Erro: ",
                    erro.sqlMessage
                );
                res.status(500).json(erro.sqlMessage)
            }
        )
}

function comentario(req, res) {

    var idUsuario = req.params.id

    dashboardModel.comentario(idUsuario)

        .then(
            function (resultado) {
                res.json(resultado)
            }
        ).catch(
            function (erro) {
                console.log(erro);
                console.log(
                    "\nHouve um erro ao realizar a lista de comentario! Erro: ",
                    erro.sqlMessage
                );
                res.status(500).json(erro.sqlMessage)
            }
        )
}

function listarPost(req, res) {

    var idUsuario = req.params.id

    dashboardModel.listarPost(idUsuario)

        .then(
            function (resultado) {
                res.json(resultado)
            }
        ).catch(
            function (erro) {
                console.log(erro);
                console.log(
                    "\nHouve um erro ao realizar a lista de comentario! Erro: ",
                    erro.sqlMessage
                );
                res.status(500).json(erro.sqlMessage)
            }
        )
}

function listarCurtida(req, res) {

    var idUsuario = req.params.id

    dashboardModel.listarCurtida(idUsuario)

        .then(
            function (resultado) {
                res.json(resultado)
            }
        ).catch(
            function (erro) {
                console.log(erro);
                console.log(
                    "\nHouve um erro ao realizar a lista de comentario! Erro: ",
                    erro.sqlMessage
                );
                res.status(500).json(erro.sqlMessage)
            }
        )
}

function listarComentario(req, res) {

    var idUsuario = req.params.id

    dashboardModel.listarComentario(idUsuario)

        .then(
            function (resultado) {
                res.json(resultado)
            }
        ).catch(
            function (erro) {
                console.log(erro);
                console.log(
                    "\nHouve um erro ao realizar a lista de comentario! Erro: ",
                    erro.sqlMessage
                );
                res.status(500).json(erro.sqlMessage)
            }
        )
}

module.exports = {
    post,
    curtida,
    comentario,
    listarPost,
    listarCurtida,
    listarComentario
}