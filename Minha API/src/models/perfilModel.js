var database = require("../database/config")

function atualizarDesc(novaDescricao, idUsuario) {
    var instrucaoSql = `
    UPDATE usuario SET descricao = '${novaDescricao}' WHERE idUsuario = '${idUsuario}';`

    console.log("Executando a instrução SQL: \n" + instrucaoSql)
    return database.executar(instrucaoSql);
}

function listar(id) {
    var instrucaoSql = `
    SELECT u.nome, p.descricao, p.imagem_post, p.idPost, p.quem_postou
    FROM usuario as u JOIN  post as p ON p.quem_postou = u.idUsuario WHERE u.idUsuario = ${id} ORDER BY  p.dtPostagem DESC`

    console.log("Executando a instrução SQL: \n" + instrucaoSql)
    return database.executar(instrucaoSql)
}

function enviarFotoPerfil(newPost) {
    var instrucao = `UPDATE usuario SET imagem_perfil = "${newPost.imagem}" WHERE idUsuario = ${newPost.idUsuario};;`

    return database.executar(instrucao);
}

function atualizarInfo(id) {
    var instrucaoSql = `
    SELECT * FROM usuario WHERE idUsuario = ${id};`

    console.log("Executando a instrução SQL: \n" + instrucaoSql)
    return database.executar(instrucaoSql)
}

function visitar(id) {
    var instrucaoSql = `
select * from usuario WHERE idUsuario = ${id};`

    console.log("Executando a instrução SQL: \n" + instrucaoSql)
    return database.executar(instrucaoSql)
}

module.exports = {
    atualizarDesc,
    listar,
    enviarFotoPerfil,
    atualizarInfo,
    visitar
}