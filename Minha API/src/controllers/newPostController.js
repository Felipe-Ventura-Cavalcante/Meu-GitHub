var newPostModel = require('../models/newPostModel');


function enviarPost(req, res) {

    var imagem = req.file ? req.file.filename : null;

    var { novaDescServer, idUsuario } = req.body

    var newPost = { novaDescServer, idUsuario, imagem }

    newPostModel.enviarPost(newPost)
      .then(resultado => {
        res.status(201).send("Usuario criado com sucesso");
      }).catch(err => {
        res.status(500).send(err);
      });
  }

module.exports = {
  enviarPost
}