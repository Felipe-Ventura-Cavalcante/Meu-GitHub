var express = require("express")

var router = express.Router()

var perfilController = require("../controllers/perfilController")


router.post("/atualizarDesc", function(req, res) {
    perfilController.atualizarDesc(req, res)
})

router.get("/:id", function(req, res) {
    perfilController.listar(req, res)
}
)

module.exports = router