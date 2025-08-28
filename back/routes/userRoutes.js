import express from "express";
import { register, loginUser, deleteUser } from "../controllers/usersController.js";
import { verifyToken, requireAuth } from "../middlewares/auth.js";

const router = express.Router();

// Temporaire pour créer les comptes via Postman
// router.post("/", register); // pas de verifyToken ni requireAuth


// Créer un utilisateur (admin seulement)
 router.post("/", verifyToken, requireAuth(["admin"]), register);

// Connexion (login)
router.post("/login", loginUser);

// Supprimer un utilisateur (admin seulement)
router.delete("/:id", verifyToken, requireAuth(["admin"]), deleteUser);

// Route admin protégée
router.get("/admin/dashboard", verifyToken, requireAuth(["admin"]), (req, res) => {
  res.json({ message: `Bienvenue ${req.user.username}, dashboard admin.` });
});

// Route protégée de la cliente
router.get("/gerante/dashboard", verifyToken, requireAuth(["gerante"]), (req, res) => {
  res.json({ message: `Bienvenue ${req.user.username}, dashboard gérante.` });
});

export default router;
