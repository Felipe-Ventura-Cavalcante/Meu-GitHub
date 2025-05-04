var database = require("../database/config")

function atualizarDesc(novaDescricao, idUsuario) {
    var instrucaoSql = `
    UPDATE usuario SET descricao = '${novaDescricao}' WHERE idUsuario = '${idUsuario}';`

    console.log("Executando a instrução SQL: \n" + instrucaoSql)
    return database.executar(instrucaoSql);
}

function listar(id) {
    var instrucaoSql = `
    SELECT u.nome, p.descricao, p.imagem_post
    FROM usuario as u JOIN  post as p ON p.quem_postou = u.idUsuario WHERE u.idUsuario = ${id}`

    console.log("Executando a instrução SQL: \n" + instrucaoSql)
    return database.executar(instrucaoSql)
}

module.exports = {
    atualizarDesc,
    listar
}