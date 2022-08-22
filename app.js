'use strict'

var express = require('express');
var bodyParser = require('body-parser');

var app = express();

//cargar las rutas
var user_routes = require('./routes/user');


//middlewares de body-parser
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

//Cabeceras y cors(acceso entre dominios)
app.use((req,res,next) => {
	res.header('Access-Control-Allow-Origin', '*');
	res.header('Access-Control-Allow-Headers', 'Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Request-Method');
	res.header('Access-Control-Allow-Methods','GET,POST,OPTIONS,PUT, DELETE');
	res.header('Allow','GET,POST,OPTIONS,PUT, DELETE');
});


//Rutas base
app.use('/api', user_routes); //todas las rutas preceden a /api + nombre

app.get('/probando', (req,res) => {
	res.status(200).send({message: "Funciona"});
});


module.exports = app; //para luego poder importarlos