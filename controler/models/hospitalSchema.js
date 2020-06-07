const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const paciente = require('./pacienteSchema')
const hospital = new Schema({
    leitos: Number,
    tipo: String,
    pacientes: [paciente]
});
module.exports = hospital