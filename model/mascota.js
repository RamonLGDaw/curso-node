const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const mascotaSchema = new Schema({
    nombre: String,
    descripcion: String
})

// Crear modelo
const mascota = mongoose.model('Mascota', mascotaSchema);

module.exports = mascota;