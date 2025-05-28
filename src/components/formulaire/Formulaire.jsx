import { useForm } from 'react-hook-form';
import emailjs from '@emailjs/browser';
import './Formulaire.css';

export default function Formulaire() {
  const { register, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = (data) => {
    emailjs.send(
      'service_it5sfmi',               // ✅ Ton Service ID SMTP
      'contact_form_gabriela',         // ✅ Ton Template ID
      data,
      '38OUegYN8vI3s1Ld8'        // ✅ Trouvable dans ton dashboard EmailJS > Account > Public Key
    ).then(
      () => alert("Message envoyé !"),
      (err) => alert("Erreur lors de l'envoi : " + err.text)
    );
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input type="text" placeholder="Nom" {...register("Nom", { required: true })} />
      <input type="text" placeholder="Prénom" {...register("Prenom", { required: true })} />
      <input type="email" placeholder="Email" {...register("Email", { required: true })} />
      <input type="tel" placeholder="Téléphone" {...register("Telephone")} />
      <textarea placeholder="Message" {...register("Message", { required: true })}></textarea>
      <input type="submit" value="Envoyer" />
    </form>
  );
}
