import React, {useState} from "react";
import Login from "./Login.jsx";
import SignUp from "./SignUp.jsx";
import '../Styles/LoginPage.css'

export default function LoginPage({ setIsLogged }) {

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [isLogin, setIsLogin] = useState(true)

    const onClick = (e) => {
        e.preventDefault()
        if (email !== '' && password !== '') {
            setIsLogged(true)
        }
    }

    return (
        <>
            {isLogin ? <Login
                    setIsLogged={setIsLogged}
                    email={email}
                    password={password}
                    setEmail={setEmail}
                    setPassword={setPassword}
                    setIsLogin={setIsLogin}
                /> :
                <SignUp
                    setIsLogged={setIsLogged}
                    email={email}
                    password={password}
                    setEmail={setEmail}
                    setPassword={setPassword}
                    setIsLogin={setIsLogin}
                />}
        </>
    )
}