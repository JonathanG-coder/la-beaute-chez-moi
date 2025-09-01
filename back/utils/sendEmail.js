// back/utils/sendEmail.js
import nodemailer from 'nodemailer';
import dotenv from 'dotenv';

dotenv.config();

// tester si je récupère mes variables

console.log(process.env.GMAIL_USER);
console.log(process.env.GMAIL_APP_PASSWORD);


const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.GMAIL_USER,
    pass: process.env.GMAIL_APP_PASSWORD,
  },
});

export default async function sendEmail({ to, subject, html }) {
  try {
    const info = await transporter.sendMail({
      from: `${process.env.GMAIL_NAME} <${process.env.GMAIL_USER}>`,
      to,
      subject,
      html,
    });

    console.log("Email envoyé:", info.messageId);
  } catch (error) {
    console.error("Erreur lors de l'envoi d'email:", error);
    throw new Error("Impossible d’envoyer l’email");
  }
}
