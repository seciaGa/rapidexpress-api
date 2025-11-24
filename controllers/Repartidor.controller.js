const Repartidor = require("../models/Repartidor");

module.exports = {
  obtenerRepartidores: async (req, res) => {
    try {
      const repartidores = await Repartidor.find();
      res.json(repartidores);
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  },

  crearRepartidor: async (req, res) => {
    try {
      const nuevoRepartidor = new Repartidor(req.body);
      const saved = await nuevoRepartidor.save();
      res.status(201).json(saved);
    } catch (err) {
      res.status(400).json({ message: err.message });
    }
  },

  // 
  actualizarRepartidor: async (req, res) => {
    try {
      const actualizado = await Repartidor.findByIdAndUpdate(
        req.params.id,
        req.body,
        { new: true }
      );

      res.json(actualizado);
    } catch (err) {
      res.status(400).json({ message: err.message });
    }
  },

  eliminarRepartidor: async (req, res) => {
    try {
      await Repartidor.findByIdAndDelete(req.params.id);
      res.json({ message: "Repartidor eliminado" });
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  }
};
