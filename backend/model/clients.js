const mongoose = require('mongoose');

const etiquetteSchema = new mongoose.Schema({
  name: String
});

const userSchema = new mongoose.Schema({
  name: { type: String, required: true },
  logo_url: String,
  images_url: [String],
  video: String,
  gouvernorat: String,
  pays: String,
  delegation: String,
  activité: String,
  secteur: String,
  description: String,
  address: String,
  category: [String],
  etiquette: [etiquetteSchema]
});


  
module.exports = mongoose.model('User', userSchema);
