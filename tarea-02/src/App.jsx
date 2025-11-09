// import { useState } from "react"
import { useState } from "react";
import { Login } from "./components/Login"
// import {Register} from "./components/Register"


const App = () => {

  const [user, setUser] = useState ("");


  const handleLogin = (Username) => {
    console.log(Username);
    //Toma el valor del email del user
    setUser(Username);

  }
  
      const handleLogout = () => {
      setUser("");
  }
  return (
    <>
<> 
<h1>Bienvenido de nuevo {user} </h1>
      <Login onLogin={handleLogin}/>
</>
  
      <button onClick={handleLogout}> Logout</button>
    </>
  )
}
export default App;