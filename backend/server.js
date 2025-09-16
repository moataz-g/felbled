const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const app = express();
app.use(cors());
app.use(express.json());

// Route test
app.get('/', (req, res) => {
  res.send('Backend is up and running 🚀');
});

// Exemple de route API
app.get('/api/test', (req, res) => {
  res.json({ message: 'API working!' });
});

// Connexion à MongoDB
mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log('✅ Connected to MongoDB'))
  .catch((err) => console.error('❌ MongoDB connection error:', err));

// Lancer le serveur
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

const User = require('./model/clients.js')

// Obtenir tous les utilisateurs
app.get('/api/users', async (req, res) => {
  try {
    const users = await User.find();
    res.json(users);
  } catch (err) {
    res.status(500).json({ error: 'Erreur lors de la récupération des utilisateurs' });
  }
});

// Ajouter un nouvel utilisateur
app.post('/api/users', async (req, res) => {
  try {
    const newUser = new User(req.body);
    await newUser.save();
    res.json(newUser);
  } catch (err) {
    res.status(400).json({ error: 'Erreur lors de la création de l\'utilisateur', details: err });
  }
});
