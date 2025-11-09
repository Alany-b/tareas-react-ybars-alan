 import { useForm }  from "../hooks/useForm.js";




export const Login = ({onLogin}) => {
  const {Form, handleChange, } = useForm({
    Username: "",
    Contraseña: "",
  });
  const handleSubmit = (event) => {
    onLogin(Form.Username);
    event.preventDefault();
  
  }

  return (
    <form className="Login">
      <input type="text" name="Username" placeholder="Username" onChange={handleChange}/>
      <input type="text" name="Contraseña" placeholder="Contraseña" onChange={handleChange} />

      <button onClick={handleSubmit}>Iniciar Sesion </button>
    </form>
  );
};
