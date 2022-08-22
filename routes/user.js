'use strict'

var express = require('express');
var UserController = require('../controllers/user');

var api = express.Router();

api.get('/pruebas-controller', UserController.pruebas);
api.post('/register', UserController.saveUser); //post porque es para guardar
api.post('/login', UserController.login); //post porque es para guardar

module.exports = api;