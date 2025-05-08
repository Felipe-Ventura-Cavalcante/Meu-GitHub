var express = require("express")

var router = express.Router()

var curtidaController = require("../controllers/curtidaController")

router.get("/:idPost", function (req, res) {
    curtidaController.qtd_Curtida(req, res)
})

module.exports = router