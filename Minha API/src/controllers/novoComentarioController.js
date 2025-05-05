var novoComentarioModel = require("../models/novoComentarioModel")

function novo_comentario(req, res) {


    var idUsuario_novo = Number(req.body.idUsuarioServer)
    var idPost = Number(req.body.idPostServer)
    var quem_postou = Number(req.body.quem_postouServer)
    var novo_comentarioVar = req.body.novo_comentarioServer

    
    // a ordem da criação das variaveis importa
    novoComentarioModel.novo_comentario(idUsuario_novo, idPost, quem_postou, novo_comentarioVar)

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

module.exports = {
    novo_comentario
}