import { useState } from "react"; //useState sirve actualizar el estado de un componente

export const useForm = (initialValue) => {
  const [Form, setForm] = useState(initialValue);

  const handleChange = (event) => {
    setForm({
      ...Form,
      [event.target.name]: event.target.value,
    });
    console.log(Form);
  };
  return {
    Form,
    setForm,
    handleChange,
  };
};
