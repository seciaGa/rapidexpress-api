const mongoose = require("mongoose");
const ClientSchema = new mongoose.Schema({
    nombre_completo: {
        type: String,
        required: true
    },
    dui: {
        type: String,
        required: true,
        unique:true
    },
    telefono:{
        type: String,
        required: true
    },
    correo: {
        type: String,
        required: false
    },
    direccion: {
        departamento: { type: String, required: true },
        municipio: { type: String, required: true},
        colonia: { type: String, required: true},
        detalle: { type: String, required: false}
    },
    creado_en: {
        type: Date,
        default: Date.now
    }
});
module.exports = mongoose.model("cliente", ClientSchema);
