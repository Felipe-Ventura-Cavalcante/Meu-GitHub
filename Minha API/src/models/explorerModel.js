var database = require("../database/config")

function listar(id_post_buscar) {
    var instrucaoSql = `
    select u.nome, p.descricao, p.imagem_post 
    FROM usuario AS u JOIN post as p on p.quem_postou = u.idUsuario;`

    console.log("Executando a instrução SQL: \n" + instrucaoSql)
    return database.executar(instrucaoSql)
}

module.exports = {
    listar
}