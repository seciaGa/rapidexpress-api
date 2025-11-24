const Envio = require("../models/Envio");

// mostrar todo los envíos
exports.obtenerEnvios = async (req, res) => {
  try {
    const envios = await Envio.find().populate("id_cliente");
    res.json(envios);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Crear envío
exports.crearEnvio = async (req, res) => {
  try {
    const envio = await Envio.create(req.body);
    res.json(envio);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Actualzar envío
exports.actualizarEnvio = async (req, res) => {
  try {
    const envio = await Envio.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    res.json(envio);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Elimina envío
exports.eliminarEnvio = async (req, res) => {
  try {
    await Envio.findByIdAndDelete(req.params.id);
    res.json({ mensaje: "Envio eliminado" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
