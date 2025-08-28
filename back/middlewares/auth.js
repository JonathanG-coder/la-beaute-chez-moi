import jwt from "jsonwebtoken";

export const verifyToken = (req, res, next) => {
  const authHeader = req.headers["authorization"];
      // Le header a normalement cette forme : "Bearer <token>", donc on récupère la 2e partie (le token)
  const token = authHeader && authHeader.split(" ")[1]; // Bearer <token>

  if (!token) return res.status(401).json({ message: "Token manquant" });
   
  // Vérifie la validité du token en utilisant la clé secrète (stockée dans .env)
  jwt.verify(token, process.env.JWT_SECRET, (err, user) => {
    if (err) return res.status(403).json({ message: "Token invalide" });
    // Si ok 
    req.user = user; // Contient id, username, role
    // Passe au middleware ou route suivante
    next();
  });
};

export const requireAuth = (roles = []) => {
  return (req, res, next) => {
    if (!req.user) return res.status(401).json({ message: "Non authentifié" });
    if (roles.length && !roles.includes(req.user.role))
      return res.status(403).json({ message: "Accès interdit" });
    next();
  };
};
