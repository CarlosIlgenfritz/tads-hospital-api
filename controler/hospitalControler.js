const mongoose = require('mongoose');
const hospitalSchema = require('./models/hospitalSchema')
mongoose.connect('mongodb+srv://admin:admin@cluster0-bisgl.mongodb.net/hospital?retryWrites=true&w=majority', { useNewUrlParser: true, useUnifiedTopology: true });

const Hospital = mongoose.model('Hospital', hospitalSchema);



module.exports = controler = {
    async listaTodosHospitais() {
        var arr = await Hospital.find().then((response) => {
            return response
        }).catch(erro => {
            console.log(erro)
        })
        return arr
    },
    async buscaPorId(id) {
        const hospitalPorId = await Hospital.find({ _id: mongoose.Types.ObjectId(id) }).then((response) => {
            return response
        }).catch(erro => {
            console.log(erro)
        })
        return hospitalPorId
    },
    async adicionaHospital(data) {
        const novoHospital = new Hospital(data);
        return await novoHospital.save().then((response) => { return response });

    },
    async atualizaDadosHospital(data, id) {
        const dadoAtualizado = await Hospital.findOneAndReplace({ _id: mongoose.Types.ObjectId(id) }, data).then((response) => {
            return response
        }).catch(erro => {
            console.log(erro)
        })
        return dadoAtualizado
    },
    async deletaHospital(id) {
        const deletaCurso = await Hospital.findOneAndDelete({ _id: mongoose.Types.ObjectId(id) }).then((response) => {
            console.log(response)
        }).catch(erro => {
            console.log(erro)
        })
        return deletaCurso
    },
}