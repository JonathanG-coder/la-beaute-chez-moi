// routes/messageRoutes.js
import express, { Router } from "express";
import { listMessages, addMessage, getMessageById, deleteMessage } from "../controllers/messagesController.js";

const router = express.Router();

// Ajouter un message
router.post("/", addMessage);

// Récupérer tous les messages
router.get("/", listMessages);

// Récuperer un message par ID
router.get("/:id", getMessageById);

// Supprimer un message par ID
router.delete("/:id", deleteMessage);

export default router;
