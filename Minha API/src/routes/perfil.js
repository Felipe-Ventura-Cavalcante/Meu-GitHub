var express = require("express")

var router = express.Router()

var perfilController = require("../controllers/perfilController")


router.post("/atualizarDesc", function(req, res) {
    perfilController.atualizarDesc(req, res)
})

router.get("/novoComentario/:id",
    perfilController.listar
)

module.exports = router