import pool from "../config/db.js";


// Créer un message
export const createMessage = (nom, prenom, email, telephone, message) => {
    return pool.query(
        "INSERT INTO messages (nom, prenom, email, telephone, message) VALUES (?, ?, ?, ?, ?)",
        [nom, prenom, email, telephone, message]
    );
}


// Récuperer les messages 
export const getAllMessages = () => {
   return pool.query("SELECT * FROM messages ORDER BY date_envoi DESC");
};

// Récuperer un message par son ID

export const getMessageByID = (id) => {
    return pool.query("SELECT * FROM messages WHERE id = ?", [id])
};

// Supprimer un message

export const deleteMessage = (id) => {
  return pool.query("DELETE FROM messages WHERE id = ?", [id]);
  };
