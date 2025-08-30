import { useForm } from 'react-hook-form';
import './Formulaire.css';

export default function Formulaire() {
  const { register, handleSubmit, reset, formState: { errors } } = useForm();

  const onSubmit = async (data) => {
    try {
      const response = await fetch('http://localhost:3000/messages', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
      });

      if (response.ok) {
        alert('Message envoyé avec succès !');
        reset(); // Permet d'init le formulaire aprés envoi.
      } else {
        alert("Erreur lors de l'enregistrement.");
        reset();
      }
    } catch (error) {
      alert("Erreur réseau : " + error.message);
      reset();
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input
        type="text"
        placeholder="Nom"
        {...register("nom", { required: "Le nom est obligatoire" })}
      />
      {errors.Nom && <p className="error">{errors.Nom.message}</p>}

      <input
        type="text"
        placeholder="Prénom"
        {...register("prenom", { required: "Le prénom est obligatoire" })}
      />
      {errors.Prenom && <p className="error">{errors.Prenom.message}</p>}

      <input
        type="email"
        placeholder="Email"
        {...register("email", {
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
        {...register("telephone")}
      />

      <textarea
        placeholder="Message"
        {...register("message", { required: "Le message est obligatoire" })}
      />
      {errors.Message && <p className="error">{errors.Message.message}</p>}

      <input type="submit" value="Envoyer" />
    </form>
  );
}
