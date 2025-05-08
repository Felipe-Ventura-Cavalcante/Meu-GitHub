var express = require("express")

var router = express.Router()

var listaCurtidaController = require("../controllers/listaCurtidaController")

router.get("/:idUsuario", function (req, res) {
    listaCurtidaController.listaCurtida(req, res)
})

module.exports = router