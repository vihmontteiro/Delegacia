const express = require("express");
const router = express.Router();
const OcorrenciaController = require("../controllers/ocorrenciaController");
const auth = require("../middlewares/usuarioAuth")

router.get("/ocorrencias/cadastrar", OcorrenciaController.cadastrar);
router.get("/ocorrencias",auth, OcorrenciaController.relatorio);
router.post("/ocorrencias", OcorrenciaController.salvar);
router.post("/ocorrencias", OcorrenciaController.salvar);
router.get("/ocorrencias/:numero",auth, OcorrenciaController.detalhar);
router.get("/ocorrencias/:numero/remover",auth, OcorrenciaController.remover);
router.get("/ocorrencias/:numero/atualizar",auth, OcorrenciaController.atualizar);
router.post("/ocorrencias/atualizar",auth, OcorrenciaController.atualizarPost);

module.exports = router;
