const mongoose = require("mongoose");

const PagoSchema = new mongoose.Schema({
  id_envio: { type: mongoose.Schema.Types.ObjectId, ref: "Envio" },
  monto: Number,
  metodo: String,
  fecha: String,
  estado_pago: String
});

module.exports = mongoose.model("Pago", PagoSchema);