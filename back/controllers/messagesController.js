import * as Messages from "../models/messagesModel.js";
import sendEmail from "../utils/sendEmail.js";


// Ajouter un message (formulaire contact)
export async function addMessage(req, res) {
  const { nom, prenom, email, telephone, message } = req.body;
  try {
    await Messages.createMessage(nom, prenom, email, telephone, message);

    //Envoi du mail à la boite mail de la cliente grâce à nodemailer en plus que dans la base de données
    try {
      await sendEmail({
        to: process.env.GMAIL_USER,
        replyTo: email, // l'adresse de la personne qui a rempli le formulaire
        subject: "Nouveau message depuis le site LabeauteChezMoi",
        html: `
          <h2>Nouveau message reçu</h2>
          <p><strong>Nom:</strong> ${nom}</p>
          <p><strong>Prénom:</strong> ${prenom}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Téléphone:</strong> ${telephone}</p>
          <p><strong>Message:</strong><br/>${message}</p>
        `,
      });
    } catch (err) {
      console.error("Erreur lors de l'envoi de l'email:", err);
      // On n’empêche pas la sauvegarde DB, mais on informe qu'il y a eu un souci mail
      return res
        .status(201)
        .json({ message: "Message enregistré mais email non envoyé." });
    }


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
