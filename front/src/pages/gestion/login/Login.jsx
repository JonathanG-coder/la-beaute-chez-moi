import React, { useState } from "react";
import "./Login.css";

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

      localStorage.setItem("token", data.token);
      const userRole = data.user.role;

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
    <div className="login-container">
      <h2 className="login-title">Connexion {role}</h2>
      <form className="login-form-container" onSubmit={handleLogin}>
        <input
          type="text"
          placeholder="Nom d'utilisateur"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
          className="login-input"
        />
        <input
          type="password"
          placeholder="Mot de passe"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
          className="login-input"
        />
        <button type="submit" className="login-submit-btn">
          Se connecter
        </button>
        {error && <p className="login-error">{error}</p>}
      </form>
    </div>
  );
}
