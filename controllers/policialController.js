const Policial = require("../models/Policial");

class PolicialController {

    static cadastrar(req, res) {
        const policial ={};
        res.render("policial/cadastrar", {policial});
    }

    static async relatorio(req, res) {
        const status = req.query.s;
        const policiais = await Policial.find();
        res.render("policial/relatorio", { policiais, status });
    }

    static async salvar(req, res) {
        const { registro, nome, idade } = req.body;
        const novoPolicial = new Policial({ registro, nome, idade });
        await novoPolicial.save();
        res.redirect("/policiais?s=1");
    }

    static async detalhar(req, res) {
        const policial = await Policial.findOne({ registro: req.params.registro });
        res.render("policial/detalhar", { policial });
    }

    static async remover(req, res) {

        await Policial.deleteOne({ registro: req.params.registro });
        res.redirect("/policiais?s=2");
    }

     static async atualizar(req, res) {
        const policial = await Policial.findOne({ registro: req.params.registro });
        res.render("policial/cadastrar", { policial });
    }


    static async atualizarPost(req, res) {
        const policial = req.body;
        await Policial.updateOne({_id:policial._id},{
            registro: policial.registro,
            nome: policial.nome,
            idade: policial.idade

        });
        
        res.redirect("/policiais?s=3");
    }
}

module.exports = PolicialController;