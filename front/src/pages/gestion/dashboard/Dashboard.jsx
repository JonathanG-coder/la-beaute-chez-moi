import React, { useEffect, useState } from "react";
import "./Dashboard.css";

export default function Dashboard() {
  const [messages, setMessages] = useState([]);
  const [error, setError] = useState("");

  const token = localStorage.getItem("token");

  const fetchMessages = async () => {
    try {
      const res = await fetch("http://localhost:3000/messages", {
        headers: { Authorization: `Bearer ${token}` },
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.message || "Erreur serveur");
      setMessages(data);
    } catch (err) {
      setError(err.message);
    }
  };

  const handleDelete = async (id) => {
    try {
      await fetch(`http://localhost:3000/messages/${id}`, {
        method: "DELETE",
        headers: { Authorization: `Bearer ${token}` },
      });
      setMessages(messages.filter((m) => m.id !== id));
    } catch (err) {
      setError("Impossible de supprimer le message");
    }
  };

  useEffect(() => {
    fetchMessages();
  }, []);

  return (
    <div className="dashboard-container">
      <h2 className="dashboard-title">Dashboard</h2>
      {error && <p className="dashboard-error">{error}</p>}
      <table className="dashboard-table">
        <thead>
          <tr>
            <th>Nom</th>
            <th>Email</th>
            <th>Message</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {messages.map((m) => (
            <tr key={m.id} className="dashboard-row">
              <td>{m.nom}</td>
              <td>{m.email}</td>
              <td>{m.message}</td>
              <td>
                <button
                  className="dashboard-delete-btn"
                  onClick={() => handleDelete(m.id)}
                >
                  Supprimer
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
