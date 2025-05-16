var database = require("../database/config");

function salvar(newPost) {
    var instrucao = `INSERT INTO post (quem_postou, descricao, imagem_post) VALUES
(${newPost.idUsuario}, "${newPost.input_desc}", "${newPost.imagem}");`

    return database.executar(instrucao);
}

module.exports = {
    salvar
}