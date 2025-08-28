import * as Messages from "../models/messagesModel.js";


// Ajouter un message (formulaire contact)
export async function addMessage(req, res) {
  const { nom, prenom, email, telephone, message } = req.body;
  try {
    await Messages.createMessage(nom, prenom, email, telephone, message);
    res.status(201).send("Message enregistré avec succès");
  } catch (err) {
    console.error(err);
    res.status(500).send("Erreur serveur");
  }
}


// Liste tous les messages
export async function listMessages(req, res) {
  try {
    const [messages] = await Messages.getAllMessages();
    res.status(200).json(messages); // Pour montrer dans un API, sur Postman
    // res.render("Messages", { messages }) // Pour montrer dans un vue en HTML
  } catch (err) {
    console.error(err);
    res.status(500).send("Erreur serveur");
  }
}



// Récupérer un message par ID
export async function getMessageById(req, res) {
  const { id } = req.params;
  try {
    const [rows] = await Messages.getMessageByID(id);
    if (!rows.length) return res.status(404).json({ error: "Message non trouvé" });
    res.status(200).json(rows[0]);
  } catch (err) {
    console.error(err);
    res.status(500).send("Erreur serveur");
  }
}

// Supprimer un message
export async function deleteMessage(req, res) {
  const { id } = req.params;
  try {
    await Messages.deleteMessage(id);
    res.status(200).send("Message supprimé avec succès");
  } catch (err) {
    console.error(err);
    res.status(500).send("Erreur serveur");
  }
}
