import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { User } from "../models/usersModel.js";

// Créer un utilisateur (admin ou gerante)
export const register = async (req, res) => {
  const { username, password, role } = req.body;

  try {
    // Vérifier si l'utilisateur existe déjà
    const existing = await User.getUserByUsername(username);
    if (existing) {
      return res.status(409).json({ message: "Email déjà utilisé" });
    }

    // Hasher le mot de passe
    const hashedPassword = await bcrypt.hash(password, 10);

    const result = await User.createUser({ username, password: hashedPassword, role });
    res.status(201).json({ message: "Utilisateur créé avec succès", id: result.insertId });
  } catch (err) {
    console.error("Erreur addUser :", err);
    res.status(500).json({ error: "Erreur serveur" });
  }
};

// Connexion / login
export const loginUser = async (req, res) => {
  const { username, password } = req.body;

  try {
    const user = await User.getUserByUsername(username);
    if (!user) {
      return res.status(401).json({ message: "Nom d'utilisateur ou mot de passe incorrect" });
    }

    // Vérifier le mot de passe
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(401).json({ message: "Nom d'utilisateur ou mot de passe incorrect" });
    }

    // Générer un token JWT
    const token = jwt.sign(
      { id: user.id, username: user.username, role: user.role },
      process.env.JWT_SECRET,
      { expiresIn: "1h" } // Permet de rester authentifié
    );

    // Renvoie aussi l'objet user pour que le front connaisse le rôle
    res.status(200).json({ 
      message: "Connexion réussie", 
      token, 
      user: { id: user.id, username: user.username, role: user.role } 
    });

  } catch (err) {
    console.error("Erreur loginUser :", err);
    res.status(500).json({ error: "Erreur serveur" });
  }
}; // <-- ici, cette accolade ferme correctement loginUser

// Supprimer un utilisateur (admin)
export const deleteUser = async (req, res) => {
  const { id } = req.params;
  try {
    await User.deleteUser(id);
    res.status(200).json({ message: "Utilisateur supprimé avec succès" });
  } catch (err) {
    console.error("Erreur deleteUser :", err);
    res.status(500).json({ error: "Erreur serveur" });
  }
};
