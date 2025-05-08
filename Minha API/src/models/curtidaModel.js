var database = require("../database/config")

function curtida(idUsuario, idPost, quem_postou) {
    var instrucaoSql = `
    INSERT INTO curtida (quem_curtiu, post_curtida, dono_post_curtida) VALUES
    (${idUsuario}, ${idPost}, ${quem_postou});`

    console.log("Executando a instrução SQL: \n" + instrucaoSql)
    return database.executar(instrucaoSql);
}

function qtd_Curtida(idPostCurtida) {
    var instrucaoSql = `
    select count(*)  AS qtd FROM curtida WHERE post_curtida = ${idPostCurtida};`

    console.log("Executando a instrução SQL: \n" + instrucaoSql)
    return database.executar(instrucaoSql);
}

function deletaCurtida(idPostDel, idUsuarioDel) {
    var instrucaoSql = `
        DELETE FROM curtida WHERE post_curtida = ${idPostDel} AND quem_curtiu = ${idUsuarioDel};`

    console.log("Executando a instrução SQL: \n" + instrucaoSql)
    return database.executar(instrucaoSql);
}
module.exports = {
    curtida,
    qtd_Curtida,
    deletaCurtida
}