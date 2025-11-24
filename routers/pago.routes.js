const express = require("express");
const router = express.Router();
const pagoCtrl = require("../controllers/Pago.controller");

router.get("/", pagoCtrl.obtenerPagos);
router.post("/", pagoCtrl.crearPago);
router.put("/:id", pagoCtrl.updatePago);
router.delete("/:id", pagoCtrl.deletePago);

module.exports = router;