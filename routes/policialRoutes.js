const express = require("express");
const router = express.Router();
const PolicialController = require("../controllers/policialController");
const auth = require("../middlewares/usuarioAuth")

router.get("/policiais/cadastrar",auth, PolicialController.cadastrar);
router.get("/policiais",auth, PolicialController.relatorio);
router.post("/policiais",auth, PolicialController.salvar);
router.get("/policiais/:registro",auth, PolicialController.detalhar);
router.get("/policiais/:registro/remover",auth, PolicialController.remover);
router.get("/policiais/:registro/atualizar",auth, PolicialController.atualizar);
router.post("/policiais/atualizar",auth, PolicialController.atualizarPost);




module.exports = router;