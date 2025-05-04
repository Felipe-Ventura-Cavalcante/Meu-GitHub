var perfilModel = require("../models/perfilModel")


function atualizarDesc(req, res) {

    var idUsuario = req.body.idUsuarioServer;
    var novaDescricao = req.body.descricaoServer;

    perfilModel.atualizarDesc(novaDescricao, idUsuario)
        .then(res =>
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

function listar(req, res) {
    var id = req.params.id

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

module.exports = {
    atualizarDesc,
    listar
}