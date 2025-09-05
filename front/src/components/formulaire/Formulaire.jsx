import { useForm } from 'react-hook-form';
import './Formulaire.css';

export default function Formulaire() {
  const { register, handleSubmit, reset, formState: { errors } } = useForm();

  const onSubmit = async (data) => {
    try {
      const response = await fetch('http://localhost:3000/messages', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data)
      });

      if (response.ok) {
        alert('Message envoyé avec succès !');
        reset(); 
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
    <form className="formulaire-container" onSubmit={handleSubmit(onSubmit)}>
      <input
        type="text"
        placeholder="Nom"
        {...register("nom", { required: "Le nom est obligatoire" })}
      />
      {errors.nom && <p className="formulaire-error">{errors.nom.message}</p>}

      <input
        type="text"
        placeholder="Prénom"
        {...register("prenom", { required: "Le prénom est obligatoire" })}
      />
      {errors.prenom && <p className="formulaire-error">{errors.prenom.message}</p>}

      <input
        type="email"
        placeholder="Email"
        {...register("email", {
          required: "L'email est obligatoire",
          pattern: { value: /^\S+@\S+$/i, message: "Adresse email invalide" }
        })}
      />
      {errors.email && <p className="formulaire-error">{errors.email.message}</p>}

      <input
        type="tel"
        placeholder="Téléphone"
        {...register("telephone")}
      />

      <textarea
        placeholder="Message"
        {...register("message", { required: "Le message est obligatoire" })}
      />
      {errors.message && <p className="formulaire-error">{errors.message.message}</p>}

      <input type="submit" value="Envoyer" />
    </form>
  );
}
