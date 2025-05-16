var express = require("express")
var router = express.Router()
var upload = require("../config/configUploadPerfil")
var newPostController = require("../controllers/perfilController")

// upload.single('foto') vai buscar no json alguma propriedade chamada foto 
router.post('/enviarFoto', upload.single('foto'), (req, res) => {
  newPostController.salvar(req, res);
})

module.exports = router;