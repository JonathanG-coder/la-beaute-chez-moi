import express from 'express';
import dotenv from 'dotenv';
dotenv.config();

// Import des routes 
import messagesRoutes from './routes/messagesRoutes.js';
import userRoutes from './routes/userRoutes.js';


const app = express();
const PORT = process.env.PORT || 5002;

// Un Middleware pour parser les crops des requêtes HTTP au format JSON (comme body-parser)
app.use(express.json());

// Middleware pour parser les données de formulaire (application/x-www-form-urlencoded)
app.use(express.urlencoded({ extended: true }));


// Routes d'accueil
app.get('/', (req, res) => {
  res.send('Bienvenue sur mon API');
});

// Routes API
app.use('/messages', messagesRoutes);
app.use('/users', userRoutes);

// Démarage du serveru
app.listen(PORT, () => {
    console.log(`Le serveur tourne sur http://localhost:${PORT}`);
})