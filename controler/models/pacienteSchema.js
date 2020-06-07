const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const paciente = new Schema({
    nome: String, // String is shorthand for {type: String}
    sexo: String
});
module.exports = paciente