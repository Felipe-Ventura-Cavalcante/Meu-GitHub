var newPostModel = require('../models/newPostModel');


function salvar(req, res) {
  if (!req.file) {
    return res.status(400).send("Arquivo de imagem não enviado.");
  } else {


    var imagem = req.file.filename;

    var { input_desc, idUsuario } = req.body

    var newPost = { input_desc, idUsuario, imagem }

    newPostModel.salvar(newPost)
      .then(resultado => {
        res.status(201).send("Usuario criado com sucesso");
      }).catch(err => {
        res.status(500).send(err);
      });
  }
}

module.exports = {
  salvar
}