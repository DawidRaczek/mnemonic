import React, {useState} from "react";
import Login from "./Login.jsx";
import SignUp from "./SignUp.jsx";
import '../Styles/LoginPage.css'

export default function LoginPage(props) {

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [isLogin, setIsLogin] = useState(true)

    const onClick = (e) => {
        e.preventDefault()
        if (email !== '' && password !== '') {
            props.setIsLogged(true)
        }
    }

    return (
        <>
            {isLogin ? <Login
                    onClick={onClick}
                    email={email}
                    password={password}
                    setEmail={setEmail}
                    setPassword={setPassword}
                    setIsLogin={setIsLogin}
                /> :
                <SignUp
                    onClick={onClick}
                    email={email}
                    password={password}
                    setEmail={setEmail}
                    setPassword={setPassword}
                    setIsLogin={setIsLogin}
                />}
        </>
    )
}