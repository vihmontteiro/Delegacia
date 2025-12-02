const mongoose = require("mongoose");

const UsuarioSchema = new mongoose.Schema({
  email: String,
  nome: String,
  senha: String 
});

module.exports = mongoose.model("Usuario", UsuarioSchema);


