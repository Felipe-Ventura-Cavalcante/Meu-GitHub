var database = require("../database/config")

function listar() {
    var instrucaoSql = `
    select u.nome, u.imagem_perfil, p.idPost, p.quem_postou, p.descricao, p.imagem_post
    FROM usuario AS u JOIN post as p ON p.quem_postou = u.idUsuario ORDER BY p.idPost DESC;`

    console.log("Executando a instrução SQL: \n" + instrucaoSql)
    return database.executar(instrucaoSql)
}

function listarComentario(idPostComentario) {
    var instrucaoSql = `
    select u.nome, u.imagem_perfil, c.idComentario, c.usuario_que_comentou, c.post_comentado, c.quem_postou, c.texto_comentario, c.dtComentario FROM usuario AS u
	JOIN comentario AS c on c.usuario_que_comentou = u.idUsuario WHERE c.post_comentado = ${idPostComentario} ORDER BY dtComentario DESC;
    `

    console.log("Executando a instrução SQL: \n" + instrucaoSql)
    return database.executar(instrucaoSql)
}

function novo_comentario(idUsuario_novo, idPost, quem_postou, novo_comentarioVar) {

    var instrucaoSql = `
    INSERT INTO comentario (usuario_que_comentou, post_comentado, quem_postou, texto_comentario) VALUES
        (${idUsuario_novo}, ${idPost}, ${quem_postou}, '${novo_comentarioVar}');`

    console.log("Executando a instrução SQL: \n" + instrucaoSql)
    return database.executar(instrucaoSql);
}

module.exports = {
    listar,
    listarComentario,
    novo_comentario
}