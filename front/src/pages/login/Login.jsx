import React, { useState } from "react";
import "./Login.css"; // Import du CSS séparé

export default function Login({ role }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();
    setError("");

    try {
      const res = await fetch("http://localhost:3000/users/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ username, password }),
      });

      const data = await res.json();

      if (!res.ok) {
        setError(data.message || "Erreur de connexion");
        return;
      }

      // Stocker le token dans localStorage
      localStorage.setItem("token", data.token);

      // On récupère le rôle depuis la réponse backend
      const userRole = data.user.role;

      // Redirection selon le rôle
      if (userRole === "gerante") {
        window.location.href = "/gerante/dashboard";
      } else if (userRole === "admin") {
        window.location.href = "/admin/dashboard";
      } else {
        setError("Rôle inconnu !");
      }
    } catch (err) {
      console.error(err);
      setError("Erreur serveur");
    }
  };

  return (
    <div className="login-page">
      <h2>Connexion {role}</h2>
      <form className="login-form" onSubmit={handleLogin}>
        <input
          type="text"
          placeholder="Nom d'utilisateur"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Mot de passe"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button type="submit">Se connecter</button>
        {error && <p className="error">{error}</p>}
      </form>
    </div>
  );
}
