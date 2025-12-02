const Usuario = require("../models/Usuario");
const bcryptjs = require("bcryptjs");

class UsuarioController {

    static cadastrar(req, res) {
        const usuario ={};
        res.render("usuario/cadastrar", {usuario});
    }

    static async loginPost(req, res){
        const usuario = await Usuario.findOne({email: req.body.email});
        console.log(req.body.email)
        console.log(usuario)
        if (usuario != null){//email nao existe

            if (bcryptjs.compareSync (req.body.senha, usuario.senha))  {
                req.session.usuario= usuario.email;
                res.redirect("/")
            }

         else {//senha nao confere
            res.redirect("/usuarios/login?s=1")

        } 
        }else {//email nao confere
            res.redirect("/usuarios/login?s=2")

        }
        

    }

    static loginGet(req, res) {
        const status = req.query.s;
        res.render("usuario/login", {status});
    }



    static async relatorio(req, res) {
        const status = req.query.s;
        const usuarios = await Usuario.find();
        res.render("usuario/relatorio", { usuarios, status });
    }

    static async salvar(req, res) {
        const { email, nome, senha } = req.body;
        const salt = bcryptjs.genSaltSync();
        const hash = bcryptjs.hashSync(senha, salt);
        const novoUsuario = new Usuario({ email, nome, senha:hash });
        await novoUsuario.save();
        res.redirect("/usuarios?s=1");
    }

    static async detalhar(req, res) {
        const usuario = await Usuario.findOne({ email: req.params.email });
        res.render("usuario/detalhar", { usuario });
    }

    static async remover(req, res) {

        await Usuario.deleteOne({ email: req.params.email });
        res.redirect("/usuarios?s=2");
    }



    static logout(req, res){
        req.session.usuario = null;
        res.redirect("/usuarios/login");
    }






     static async atualizar(req, res) {
        const usuario = await Usuario.findOne({ email: req.params.email });
        res.render("usuario/cadastrar", { usuario });
    }


    static async atualizarPost(req, res) {
        const usuario = req.body;

         const dadosAtualizados = {
        email: usuario.email,
        nome: usuario.nome
    };

    if (usuario.senha && usuario.senha.trim() !== "") {
        const salt = bcryptjs.genSaltSync();
        const hash = bcryptjs.hashSync(usuario.senha, salt);
        dadosAtualizados.senha = hash;
    }

    // Atualiza no banco
    await Usuario.updateOne({ _id: usuario._id }, dadosAtualizados);

    res.redirect("/usuarios?s=3");
}
    
    }


module.exports = UsuarioController;