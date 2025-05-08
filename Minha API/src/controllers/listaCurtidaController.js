var listaCurtidaModel = require("../models/listaCurtidaModel")


function listaCurtida(req, res) {

    var idUsuarioAtual = req.params.idUsuario

    listaCurtidaModel.listaCurtida(idUsuarioAtual)

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

module.exports = {
    listaCurtida
}