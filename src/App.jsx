import React, {useState} from "react";

import "./Styles/App.css"
import "./Styles/LoginPage.css"
import Cards from "./Components/Cards.jsx"
import LoginPage from "./Components/LoginPage.jsx";

export default function App() {

    const [isLogged, setIsLogged] = useState(false)

  return (
      <>
          {isLogged ? <Cards /> : <LoginPage setIsLogged={setIsLogged}/>}
      </>
  );
}
