const Ocorrencia = require("../models/ocorrencia");

class OcorrenciaController {

  static cadastrar(req, res) {
    const ocorrencia = {};
    res.render("ocorrencia/cadastrar", { ocorrencia });
  }

  static async relatorio(req, res) {
    const status = req.query.s;
    const ocorrencias = await Ocorrencia.find();
    res.render("ocorrencia/relatorio", { ocorrencias, status });
  }

  static async salvar(req, res) {
    const { numero, descricao, data, local } = req.body;
    const nova = new Ocorrencia({ numero, descricao, data, local });
    await nova.save();
    res.redirect("/ocorrencias?s=1");
  }

  static async detalhar(req, res) {
    const ocorrencia = await Ocorrencia.findOne({ numero: req.params.numero });
    res.render("ocorrencia/detalhar", { ocorrencia });
  }

  static async remover(req, res) {
    await Ocorrencia.deleteOne({ numero: req.params.numero });
    res.redirect("/ocorrencias?s=2");
  }

  static async atualizar(req, res) {
    const ocorrencia = await Ocorrencia.findOne({ numero: req.params.numero });
    res.render("ocorrencia/cadastrar", { ocorrencia });
  }

  static async atualizarPost(req, res) {
    const dados = req.body;

    await Ocorrencia.updateOne(
      { _id: dados._id },
      {
        numero: dados.numero,
        descricao: dados.descricao,
        data: dados.data,
        local: dados.local
      }
    );

    res.redirect("/ocorrencias?s=3");
  }
}

module.exports = OcorrenciaController;
