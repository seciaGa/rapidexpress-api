const Pago = require("../models/Pago");

exports.obtenerPagos = async (req, res) => {
  try {
    const data = await Pago.find();
    res.json(data);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.crearPago = async (req, res) => {
  try {
    const data = await Pago.create(req.body);
    res.json(data);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.updatePago = async (req, res) => {
  try {
    const updated = await Pago.findByIdAndUpdate(req.params.id, req.body, { new: true });

    if (!updated) return res.status(404).json({ message: "Pago no encontrado" });

    res.json({ message: "Pago actualizado", data: updated });
  } catch (error) {
    res.status(500).json({ error });
  }
};

exports.deletePago = async (req, res) => {
  try {
    const deleted = await Pago.findByIdAndDelete(req.params.id);

    if (!deleted) return res.status(404).json({ message: "Pago no encontrado" });

    res.json({ message: "Pago eliminado correctamente" });
  } catch (error) {
    res.status(500).json({ error });
  }
};

module.exports = exports;