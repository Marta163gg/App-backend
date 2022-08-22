'use strict'

//modules
var bcrypt = require('bcrypt-nodejs');

//modelos
var User = require('../models/user');

//servicio jwt
var jwt = require('../services/jwt');

//acciones
function pruebas(req, res){
	res.status(200).send({
		message: 'Probando el controlador de user'
	});
}

process.on('uncaughtException', function (err) {
    console.log(err);
}); 

function saveUser(req,res){
	var user = new User(); //Creamos el objecto del nuevo usuario

	//Cogemos los parametros
	var params = req.body;
	//console.log(params);

	if(params.password && params.name && params.surname && params.email){ //si me llegan los valores
		//Asignar valores al usuario
		user.name = params.name;
		user.surname = params.surname;
		user.email = params.email;
		user.role = 'ROLE_USER';
		user.image = null;

		bcrypt.hash(params.password, null,null, function(err,hash){
			user.password = hash;

			//Guardar user en la bd
			user.save((err, userStored) => {
				res.status(200).send({user: userStored});
				// if(err){
				// 	res.status(500).send({message: 'Error al guardar el usuario'});
				// }else{
				// 	if(!userStored){
				// 		res.status(404).send({message: 'No se ha registrado el usuario'});
				// 	}else{
				// 		res.status(200).send({user: userStored});
				// 	}
				// }
			});
		});
	}else{
		res.status(200).send({
			message: 'Introduce los datos correctamente para poder registrar al nuevo usuario'
		});

	}

}

function login(req,res){
	var params = req.body;

	var email = params.email;

	// User.findOne({email: user.email.toLowerCase()}, (err,issetUser) =>{
	// 	if(err){
	// 		res.status(500).send({message: 'Error al loggear el usuario'});
	// 	}
	// });

	res.status(200).send({
		message: 'Login user'
	});

	// res.status(200).send({
	// 	token: jwt.createToken(user)
	// });

	// res.status(200).send({user});
}

module.exports = {
	pruebas,
	saveUser,
	login
};
