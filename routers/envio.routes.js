const express = require("express");
const router = express.Router();
const envioCtrl = require("../controllers/Envio.controller");

router.get("/", envioCtrl.obtenerEnvios);
router.post("/", envioCtrl.crearEnvio);
router.put("/:id", envioCtrl.actualizarEnvio);
router.delete("/:id", envioCtrl.eliminarEnvio);

module.exports = router;
