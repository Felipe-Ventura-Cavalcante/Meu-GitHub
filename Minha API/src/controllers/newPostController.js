var newPostModel = require('../models/newPostModel');


function salvar(req, res) {

    var imagem = req.file ? req.file.filename : null;

    var { input_desc, idUsuario } = req.body

    var newPost = { input_desc, idUsuario, imagem }

    newPostModel.salvar(newPost)
      .then(resultado => {
        res.status(201).send("Usuario criado com sucesso");
      }).catch(err => {
        res.status(500).send(err);
      });
  }

module.exports = {
  salvar
}