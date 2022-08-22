'use strict'

var mongoose = require('mongoose');
var app = require('./app');
var port = process.env.PORT || 3789; 

mongoose.connect('mongodb://localhost:27017/club', (err,res) => {
	if(err){
		throw err;
	}else{
		console.log('conexion correcta');
		app.listen(port, () => {
			console.log("servidor local con node y expresss esta corriendo correctamente");
		});
	}
});