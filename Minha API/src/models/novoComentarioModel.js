var database = require("../database/config")

function novo_comentario(idUsuario_novo, idPost, quem_postou, novo_comentarioVar) {

    var instrucaoSql = `
    INSERT INTO comentario (usuario_que_comentou, post_comentado, dono_do_post, texto_comentario) VALUES
        (${idUsuario_novo}, ${idPost}, ${quem_postou}, '${novo_comentarioVar}');`

    console.log("Executando a instrução SQL: \n" + instrucaoSql)
    return database.executar(instrucaoSql);
}

module.exports = {
    novo_comentario
}