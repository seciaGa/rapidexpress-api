const mongoose = require("mongoose");

const RepartidorSchema = new mongoose.Schema({
  nombre: { type: String, required: true },
  licencia: { type: String, required: true, unique: true },
  telefono: { type: String, required: true },
  zonas_asignadas: [
    {
      departamento: String,
      municipios: [String]
    }
  ],
  activo: { type: Boolean, default: true }
});

module.exports = mongoose.model("Repartidor", RepartidorSchema, "repartidores");

