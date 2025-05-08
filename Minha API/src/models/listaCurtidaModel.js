var database = require("../database/config")

function listaCurtida(idUsuarioAtual) {
    var instrucaoSql = `
    SELECT * FROM curtida WHERE quem_curtiu = ${idUsuarioAtual};`

        console.log("Executando a instrução SQL: \n" + instrucaoSql)
        return database.executar(instrucaoSql)
}

module.exports = {
    listaCurtida
}