var express = require("express")
var router = express.Router()
var upload = require("../config/configUploadPerfil")
var perfilController = require("../controllers/perfilController")

// upload.single('foto') vai buscar no json alguma propriedade chamada foto 
router.post('/enviarFotoPerfil', upload.single('foto'), (req, res) => {
  perfilController.enviarFotoPerfil(req, res);
})

module.exports = router;