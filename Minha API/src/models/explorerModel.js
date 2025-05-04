var database = require("../database/config")

function listar(id_post_buscar) {
    var instrucaoSql = `
    select u.nome, p.descricao, p.imagem_post 
    FROM usuario AS u JOIN post as p ON p.quem_postou = u.idUsuario ORDER BY p.idPost DESC;`

    console.log("Executando a instrução SQL: \n" + instrucaoSql)
    return database.executar(instrucaoSql)
}

module.exports = {
    listar
}