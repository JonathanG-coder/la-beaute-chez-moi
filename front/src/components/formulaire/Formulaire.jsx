import { useForm } from 'react-hook-form';
import './Formulaire.css';

export default function Formulaire() {
  const { register, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = async (data) => {
    try {
      const response = await fetch('http://localhost:3001/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
      });

      if (response.ok) {
        alert('Message enregistré avec succès !');
      } else {
        alert("Erreur lors de l'enregistrement.");
      }
    } catch (error) {
      alert("Erreur réseau : " + error.message);
    }
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
