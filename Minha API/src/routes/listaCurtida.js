var express = require("express")

var router = express.Router()

var curtidaController = require("../controllers/curtidaController")

router.get("/:idUsuario", function (req, res) {
    curtidaController.listaCurtida(req, res)
})

module.exports = router