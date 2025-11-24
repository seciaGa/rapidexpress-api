const mongoose = require("mongoose");

const EnvioSchema = new mongoose.Schema({
  id_cliente: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "cliente",
    required: true
  },
  codigo_rastreo: {
    type: String,
    required: true,
    unique: true
  },
  fecha_envio: {
    type: String,
    required: true
  },
  direccion_destino: {
    departamento: String,
    municipio: String,
    colonia: String,
    detalle: String
  },
  peso: Number,
  costo: Number,
  estado_actual: {
    type: String,
    enum: ["pendiente", "en ruta", "entregado", "cancelado"],
    default: "pendiente"
  },
  historial_estados: [
    {
      fecha: String,
      ubicacion: String,
      comentario: String
    }
  ],
  id_repartidor: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Repartidor"
  }
});

module.exports = mongoose.model("Envio", EnvioSchema);
