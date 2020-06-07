var bodyParser = require('body-parser')
const hospitalControler = require('./controler/hospitalControler')
var express = require('express'),
    app = express(),
    port = process.env.PORT || 3000;


app.listen(port)
app.use(bodyParser.json())
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*")
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type,Authorization");
    res.header("Access-Control-Allow-Methods", "GET, POST, OPTIONS, PUT, PATCH, DELETE");

    next();
})
app.get("/listaHospital", async(req, res) => {
    res.send(await hospitalControler.listaTodosHospitais())
})
app.get("/buscaHospital/:id", async(req, res) => {
    res.send(await hospitalControler.buscaPorId(req.params.id))
})
app.post("/adicionaHospital", async(req, res) => {
    res.send(await hospitalControler.adicionaHospital(req.body))
})
app.put("/atualizaHospital/:id", async(req, res) => {
    res.send(await hospitalControler.atualizaDadosHospital(req.body, req.params.id))
})
app.delete("/deletaHospital/:id", async(req, res) => {
    res.send(await hospitalControler.deletaHospital(req.params.id))
})
console.log('servidor ouvindo na porta ' + port);