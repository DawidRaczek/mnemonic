import React, {useState} from "react";

import "./Styles/normalize.scss"
import "./Styles/App.scss"
import "./Styles/LoginPage.scss"
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
