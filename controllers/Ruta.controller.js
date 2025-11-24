const Ruta = require("../models/Ruta");

// Obtener todas las rutas
exports.obtenerRutas = async (req, res) => {
    try {
        const rutas = await Ruta.find();
        res.json(rutas);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Crear ruta
exports.crearRuta = async (req, res) => {
    try {
        const ruta = await Ruta.create(req.body);
        res.status(201).json(ruta);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Actualizar ruta
exports.actualizarRuta = async (req, res) => {
    try {
        const { id } = req.params;

        const rutaActualizada = await Ruta.findByIdAndUpdate(
            id,
            req.body,
            { new: true, runValidators: true }
        );

        if (!rutaActualizada) {
            return res.status(404).json({ error: "Ruta no encontrada" });
        }

        res.json(rutaActualizada);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Eliminar ruta
exports.eliminarRuta = async (req, res) => {
    try {
        const { id } = req.params;

        const rutaEliminada = await Ruta.findByIdAndDelete(id);

        if (!rutaEliminada) {
            return res.status(404).json({ error: "Ruta no encontrada" });
        }

        res.json({ mensaje: "Ruta eliminada", ruta: rutaEliminada });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};
