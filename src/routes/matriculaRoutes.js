const express = require('express');
const router = express.Router();
const controller = require('../controllers/matriculaController');

// endpoints

router.get("/", controller.listar);
router.get("/:id", controller.buscarPorId);
router.post("/", controller.criar);
router.put("/:id", controller.atualizar);
router.delete("/", controller.excluir);

module.exports = router;