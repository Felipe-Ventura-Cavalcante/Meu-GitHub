var express = require("express")

var router = express.Router()

var perfilController = require("../controllers/perfilController")

router.get("/:idUsuario", function (req, res) {
    perfilController.atualizarInfo(req, res)
})

module.exports = router