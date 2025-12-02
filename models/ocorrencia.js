const mongoose = require("mongoose");

const OcorrenciaSchema = new mongoose.Schema({
  numero: String,
  descricao: String,
  data: Date,
  local: String
});

module.exports = mongoose.model("Ocorrencia", OcorrenciaSchema);
