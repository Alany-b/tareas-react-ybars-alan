import { useForm } from "../hooks/useForm.js";

 

export const Register = () => {
  const {Form, handleChange, } = useForm({
    Username: "",
    firstname: "",
    lastname: "",
    Email: "",
    Contaseña: "",
  });
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(Form);
  }
  return (
    <form className="Register">
      <input type="text" name="Username" placeholder="Username" onChange={handleChange} />
      <input type="text" name="firstname" placeholder="firstname" onChange={handleChange} />
      <input type="text" name="lastname" placeholder="lastname" onChange={handleChange} />
      <input type="text" name="Email" placeholder="Email" onChange={handleChange}/>
      <input type="text" name="Contaseña" placeholder="Contraseña" onChange={handleChange}/>
      

      <button onClick={handleSubmit}>Registrate</button>
    </form>
  );
};
