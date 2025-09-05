import express from 'express';
import dotenv from 'dotenv';
import cors from "cors";

dotenv.config();

// Import des routes 
import messagesRoutes from './routes/messagesRoutes.js';
import userRoutes from './routes/userRoutes.js';
import googleAvis from './routes/googleAvisRoutes.js'


const app = express();
const PORT = process.env.PORT || 5002;


// Autoriser les requêtes venant du front (exemple: localhost:5173 ou ton domaine Render)
app.use(cors({
  origin: "http://localhost:5173",
  // ICi connexion au coté front (react vite) 
  // A modifier , une fois installé sur render ! apr ex : https://LABEAUTECHEZMOI.onrender.com
  // Possible de mettre * en dev pour tous autoriser, Mais eviter de le faire si données sensibles.
}));


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
app.use('/avisGoogle', googleAvis);

// Démarage du serveru
app.listen(PORT, () => {
    console.log(`Le serveur tourne sur http://localhost:${PORT}`);
})