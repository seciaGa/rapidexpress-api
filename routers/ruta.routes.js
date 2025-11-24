const express = require("express");
const router = express.Router();
const rutaCtrl = require("../controllers/Ruta.controller");
const mongoose = require("mongoose");

// Validar ID en las rutas PUT y DELETE
const validarId = (req, res, next) => {
    if (!mongoose.Types.ObjectId.isValid(req.params.id)) {
        return res.status(400).json({ error: "ID inválido" });
    }
    next();
};

router.get("/", rutaCtrl.obtenerRutas);
router.post("/", rutaCtrl.crearRuta);
router.put("/:id", validarId, rutaCtrl.actualizarRuta);
router.delete("/:id", validarId, rutaCtrl.eliminarRuta);

module.exports = router;
