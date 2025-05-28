import { useForm } from 'react-hook-form';
import './Formulaire.css';

// Lien du copy : https://react-hook-form.com/form-builder

export default function Formulaire() {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const onSubmit = data => console.log(data);
  console.log(errors);
  
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input type="text" placeholder="Nom" {...register("Nom", {required: true})} />
      <input type="text" placeholder="Prénom" {...register("Prénom", {required: true})} />
      <input type="email" placeholder="Email" {...register("Email", {required: true})} />
      <input type="tel" placeholder="Téléphone" {...register} />
      <input type="text" placeholder="Message" {...register("Message", {required: true})} />

      <input type="submit" />
    </form>
  );
}