var express = require("express")

var router = express.Router()

var curtidaController = require("../controllers/curtidaController")

router.post("/:idPost", function (req, res) {
    curtidaController.curtida(req, res)
})

router.get("/qtdCurtida/:id", function (req, res) {
    curtidaController.qtd_Curtida(req, res)
})

router.get("/listaCurtida/:idUsuario", function (req, res) {
    curtidaController.listaCurtida(req, res)
})

router.post("/deletarCurtida/:idPost", function (req, res) {
    curtidaController.deletaCurtida(req, res)
})

router.get("curtida/qtdCurtida/:idPost", function (req, res) {
    curtidaController.qtd_Curtida(req, res)
})

module.exports = router