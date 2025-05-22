var express = require("express");
var router = express.Router();

var bobIAController = require("../controllers/bobIAController")

router.post("/pergunta", async (req, res) => {

    const pergunta = req.body.pergunta;

    try {
        const resultado = await bobIAController.gerarResposta(pergunta);
        res.json({ resultado });
    } catch (error) {
        res.status(500).json({ error: 'Erro interno do servidor' });
    }
});

module.exports = router