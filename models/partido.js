'use strict'

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var PartidoSchema = Schema({
	name: String,
  	location: String,
  	day: Number,
  	participants: Number,
  	month: Number,
  	user: {type: Schema.ObjectId, ref: 'User'}
});

module.exports = mongoose.model('Partido', PartidoSchema);