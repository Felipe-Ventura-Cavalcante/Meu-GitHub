var express = require("express")

var router = express.Router()

var curtidaController = require("../controllers/curtidaController")

router.post("/:idPost", function (req, res) {
    curtidaController.deletaCurtida(req, res)
})

module.exports = router