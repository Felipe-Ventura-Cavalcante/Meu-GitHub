var express = require("express")

var router = express.Router()

var explorerController = require("../controllers/explorerController")

router.post("/:idPost", function(req, res) {
    explorerController.novo_comentario(req,res)
})

module.exports = router