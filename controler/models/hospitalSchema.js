const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const hospital = new Schema({
    leitos: Number,
    tipo: String,
    chartRGBColor: String,
    pacientes: [{
        nome: String,
        sexo: String
    }]
});
module.exports = hospital