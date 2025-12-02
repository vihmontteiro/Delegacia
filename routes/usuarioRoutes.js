const express = require("express");
const router = express.Router();
const UsuarioController = require("../controllers/usuarioController");
const auth = require("../middlewares/usuarioAuth")

router.get("/usuarios/cadastrar", UsuarioController.cadastrar);
router.get("/usuarios",auth, UsuarioController.relatorio);
router.post("/usuarios",auth, UsuarioController.salvar);
router.get("/usuarios/:email/remover",auth, UsuarioController.remover);
router.get("/usuarios/:email/atualizar",auth, UsuarioController.atualizar);
router.post("/usuarios/atualizar",auth, UsuarioController.atualizarPost);
router.get("/usuarios/login", UsuarioController.loginGet);
router.post("/usuarios/login", UsuarioController.loginPost);
router.get("/usuarios/:logout",auth, UsuarioController.logout);
router.get("/usuarios/:email",auth, UsuarioController.detalhar);

module.exports = router;