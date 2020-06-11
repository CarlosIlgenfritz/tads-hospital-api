const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const paciente = require('./pacienteSchema')
const hospital = new Schema({
    leitos: Number,
    tipo: String,
    pacientes: [{
        nome: String,
        sexo: String
    }]
});
module.exports = hospital