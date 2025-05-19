var express = require("express")

var router = express.Router()

var perfilController = require("../controllers/perfilController")


router.post("/atualizarDesc", function (req, res) {
    perfilController.atualizarDesc(req, res)
})

router.get("/:id", function (req, res) {
    perfilController.listar(req, res)
})

router.get("/atualizarInfo/:idUsuario", function (req, res) {
    perfilController.atualizarInfo(req, res)
})

router.get("/visitar/:idVisitante", function (req, res) {
    perfilController.visitar(req, res)
})

module.exports = router