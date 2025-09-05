import React, { useEffect, useState } from "react";
import axios from "axios";
import "./GoogleAvis.css";

const GoogleAvis = () => {
  const [reviews, setReviews] = useState([]);
  const [loading, setLoading] = useState(true);
  const [current, setCurrent] = useState(0); // index de l’avis visible
  const [reviewLink, setReviewLink] = useState(""); // lien réel Google Review

  useEffect(() => {
    // Récupérer les avis factices pour le moment
    // Une fois valid , remplacer /mock par /linkavisclientgoogle
    const fetchReviews = async () => {
      try {
        const res = await axios.get("http://localhost:3000/avisGoogle/mock");
        setReviews(res.data);
      } catch (err) {
        console.error("Erreur lors de la récupération des avis :", err.message);
      } finally {
        setLoading(false);
      }
    };

    // Récupére le lien réel du bouton "Laisser un avis"
    const fetchLink = async () => {
      try {
        const res = await axios.get("http://localhost:3000/avisGoogle/link");
        setReviewLink(res.data.link);
      } catch (err) {
        console.error("Erreur lors de la récupération du lien Google :", err.message);
      }
    };

    fetchReviews();
    fetchLink();
  }, []);

  const nextReview = () => {
    setCurrent((prev) => (prev + 1) % reviews.length);
  };

  const prevReview = () => {
    setCurrent((prev) => (prev - 1 + reviews.length) % reviews.length);
  };

  if (loading) return <p className="google-avis-loading">Chargement des avis...</p>;
  if (reviews.length === 0) return <p className="google-avis-empty">Aucun avis disponible.</p>;

  return (
    <div className="google-avis-container">
      <h2 className="google-avis-title">Avis Google</h2>
      <div className="google-avis-carousel">
        <button className="google-avis-nav google-avis-left" onClick={prevReview}>‹</button>

        <div className="google-avis-card">
          <p><strong>{reviews[current].author_name}</strong> ({reviews[current].rating}⭐)</p>
          <p>{reviews[current].text}</p>
        </div>

        <button className="google-avis-nav google-avis-right" onClick={nextReview}>›</button>
      </div>

      {/* Bouton pour laisser un avis */}
      {reviewLink && (
        <a
          href={reviewLink}
          target="_blank"
          rel="noopener noreferrer"
          className="google-avis-button"
        >
          Laisser un avis Google
        </a>
      )}
    </div>
  );
};

export default GoogleAvis;
