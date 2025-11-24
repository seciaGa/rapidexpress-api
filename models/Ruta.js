const mongoose = require("mongoose");

const RutaSchema = new mongoose.Schema({
    nombre_ruta: {
        type: String,
        required: true,
        trim: true
    },
    departamentos_cubiertos: {
        type: [String],
        required: true
    },
    municipios_cubiertos: {
        type: [String],
        required: true
    },
    id_repartidor_asignado: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Repartidor",
        required: true
    },
    kilometraje: {
        type: Number,
        required: true
    },
    tiempo_estimado_min: {
        type: Number,
        required: true
    },
    disponible: {
        type: Boolean,
        default: true
    }
});

module.exports = mongoose.model("Ruta", RutaSchema);
