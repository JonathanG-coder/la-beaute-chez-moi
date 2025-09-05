import express from 'express';
const router = express.Router();

// Endpoint pour les avis mockés (facultatif, peut rester pour tests)
//  A mettre en commentaire une fois Google Avis fonctionnel 
router.get('/mock', (req, res) => {
  const fakeReviews = [
    { author_name: "Alice", rating: 5, text: "Super service !" },
    { author_name: "Bob", rating: 4, text: "Très satisfait !" },
    { author_name: "Charlie", rating: 3, text: "Correct, mais peut mieux faire." },
  ];
  res.json(fakeReviews);
});

// Endpoint pour le lien Google Review réel
router.get('/linkavisclientgoogle', (req, res) => {
  const reviewLink = process.env.GOOGLE_AVIS_LINK;
  if (!reviewLink) {
    return res.status(500).json({ error: "Lien Google Avis non défini" });
  }
  res.json({ link: reviewLink });
});

export default router;
