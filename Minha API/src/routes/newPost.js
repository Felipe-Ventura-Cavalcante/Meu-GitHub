var express = require("express")
var router = express.Router()
var upload = require("../config/configUpload")
var newPostController = require("../controllers/newPostController")

// upload.single('foto') vai buscar no json alguma propriedade chamada foto 
router.post('/enviarPost', upload.single('foto'), (req, res) => {
  newPostController.enviarPost(req, res);
})

module.exports = router;