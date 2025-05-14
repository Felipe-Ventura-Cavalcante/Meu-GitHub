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
    select u.nome, c.idComentario, c.usuario_que_comentou, c.post_comentado, c.dono_do_post, c.texto_comentario, c.dtComentario FROM usuario AS u
	JOIN comentario AS c on c.usuario_que_comentou = u.idUsuario WHERE c.post_comentado = ${idPostComentario} ORDER BY dtComentario DESC;
    `

    console.log("Executando a instrução SQL: \n" + instrucaoSql)
    return database.executar(instrucaoSql)
}

module.exports = {
    listar,
    listarComentario
}