import pool from "../config/db.js";

export const User = {
  // Créer un nouvel utilisateur
  createUser: async (user) => {
    try {
      const sql = `
        INSERT INTO users (username, password, role)
        VALUES (?, ?, ?)
      `;
      const [result] = await pool.query(sql, [user.username, user.password, user.role]);
      return result;
    } catch (err) {
      throw err;
    }
  },

  // Récupérer un utilisateur par username
  getUserByUsername: async (username) => {
    try {
      const sql = "SELECT * FROM users WHERE username = ?";
      const [rows] = await pool.query(sql, [username]);
      return rows[0]; // retourne un objet utilisateur ou undefined
    } catch (err) {
      throw err;
    }
  },

  // Récupérer un utilisateur par ID
  getUserById: async (id) => {
    try {
      const sql = "SELECT * FROM users WHERE id = ?";
      const [rows] = await pool.query(sql, [id]);
      return rows[0];
    } catch (err) {
      throw err;
    }
  },

  // Lister tous les utilisateurs
  getAllUsers: async () => {
    try {
      const sql = "SELECT id, username, role FROM users";
      const [rows] = await pool.query(sql);
      return rows;
    } catch (err) {
      throw err;
    }
  },

  // Supprimer un utilisateur par ID
  deleteUser: async (id) => {
    try {
      const sql = "DELETE FROM users WHERE id = ?";
      const [result] = await pool.query(sql, [id]);
      return result;
    } catch (err) {
      throw err;
    }
  }
};
