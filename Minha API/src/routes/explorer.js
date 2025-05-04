var express = require("express");
var router = express.Router();

var explorerController = require("../controllers/explorerController");

// Crio uma rota
// (/explorer/listar)
router.get("/listar", function (req, res) {
    explorerController.listar(req, res)
})

module.exports = router