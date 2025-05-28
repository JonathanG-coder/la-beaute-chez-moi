import { useForm } from 'react-hook-form';
import emailjs from '@emailjs/browser';
import './Formulaire.css';

export default function Formulaire() {
  const { register, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = (data) => {
    emailjs.send(
      'service_it5sfmi',
      'contact_form_gabriela',
      data,
      '38OUegYN8vI3s1Ld8'
    ).then(
      () => alert("Message envoyé !"),
      (err) => alert("Erreur lors de l'envoi : " + err.text)
    );
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input
        type="text"
        placeholder="Nom"
        {...register("Nom", { required: "Le nom est obligatoire" })}
      />
      {errors.Nom && <p className="error">{errors.Nom.message}</p>}

      <input
        type="text"
        placeholder="Prénom"
        {...register("Prenom", { required: "Le prénom est obligatoire" })}
      />
      {errors.Prenom && <p className="error">{errors.Prenom.message}</p>}

      <input
        type="email"
        placeholder="Email"
        {...register("Email", { 
          required: "L'email est obligatoire",
          pattern: {
            value: /^\S+@\S+$/i,
            message: "Adresse email invalide"
          }
        })}
      />
      {errors.Email && <p className="error">{errors.Email.message}</p>}

      <input
        type="tel"
        placeholder="Téléphone"
        {...register("Telephone")}
      />

      <textarea
        placeholder="Message"
        {...register("Message", { required: "Le message est obligatoire" })}
      />
      {errors.Message && <p className="error">{errors.Message.message}</p>}

      <input type="submit" value="Envoyer" />
    </form>
  );
}
