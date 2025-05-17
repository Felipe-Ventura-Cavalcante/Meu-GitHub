var database = require("../database/config");

function enviarPost(newPost) {
    var instrucao = `INSERT INTO post (quem_postou, descricao, imagem_post) VALUES
(${newPost.idUsuario}, "${newPost.novaDescServer}", "${newPost.imagem}");`

    return database.executar(instrucao);
}

module.exports = {
    enviarPost
}