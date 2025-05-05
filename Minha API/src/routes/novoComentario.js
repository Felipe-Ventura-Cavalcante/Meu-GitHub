var express = require("express")

var router = express.Router()

var novoComentarioController = require("../controllers/novoComentarioController")

router.post("/:idPost", function(req, res) {
    novoComentarioController.novo_comentario(req,res)
})

module.exports = router