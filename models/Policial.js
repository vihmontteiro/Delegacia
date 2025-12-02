const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const policialSchema = Schema({
    registro: Number,
    nome: String,
    idade: Number
});

const Policial = mongoose.model("Policial", policialSchema);

module.exports = Policial;