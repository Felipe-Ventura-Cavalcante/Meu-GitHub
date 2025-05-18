var database = require("../database/config")

function post(idUsuario) {
    var instrucaoSql = `
    SELECT YEARWEEK(dtPostagem, 1) AS semana, 
    COUNT(*) AS qtd_post FROM post WHERE quem_postou = ${idUsuario}
    GROUP BY semana ORDER BY semana DESC LIMIT 2;`

    console.log("Executando a instrução SQL: \n" + instrucaoSql)
    return database.executar(instrucaoSql)
}

function curtida(idUsuario) {
    var instrucaoSql = `
    SELECT YEARWEEK(dtCurtida, 1) AS semana, 
    COUNT(*) AS qtd_curtida FROM curtida WHERE dono_post_curtida = ${idUsuario}
    GROUP BY semana ORDER BY semana DESC LIMIT 2;`

    console.log("Executando a instrução SQL: \n" + instrucaoSql)
    return database.executar(instrucaoSql)
}

function comentario(idUsuario) {
    var instrucaoSql = `
    SELECT YEARWEEK(dtComentario, 1) AS semana, 
    COUNT(*) AS qtd_comentario FROM comentario WHERE dono_do_post = ${idUsuario}
    GROUP BY semana ORDER BY semana DESC LIMIT 2;`

    console.log("Executando a instrução SQL: \n" + instrucaoSql)
    return database.executar(instrucaoSql)
}

function listarPost(idUsuario) {
    var instrucaoSql = `
select count(*) AS qtd from post where quem_postou = ${idUsuario};`

    console.log("Executando a instrução SQL: \n" + instrucaoSql)
    return database.executar(instrucaoSql)
}

function listarCurtida(idUsuario) {
    var instrucaoSql = `
    SELECT COUNT(*) AS qtd FROM curtida WHERE dono_post_curtida = ${idUsuario};`

    console.log("Executando a instrução SQL: \n" + instrucaoSql)
    return database.executar(instrucaoSql)
}

function listarComentario(idUsuario) {
    var instrucaoSql = `
    SELECT COUNT(*) AS qtd FROM comentario WHERE dono_do_post = ${idUsuario};`

    console.log("Executando a instrução SQL: \n" + instrucaoSql)
    return database.executar(instrucaoSql)
}

module.exports = {
    post,
    curtida,
    comentario,
    listarPost,
    listarCurtida,
    listarComentario
}