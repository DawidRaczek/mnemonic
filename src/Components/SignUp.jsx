import React from "react";
import {createUserWithEmailAndPassword} from "firebase/auth";
import {auth} from "../firebase.js";

export default function SignUp({email, setEmail, password, setPassword, setIsLogin, setIsLogged}) {

    const changeForm = (e) => {
        e.preventDefault()
        setIsLogin(true)
    }

    const onClick = (e) => {
        e.preventDefault()
        createUserWithEmailAndPassword(auth, email, password)
            .then((data) => {
                console.log(data);
                setIsLogged(true);
            })
            .catch((error) => {
                console.log(error);
                setIsLogged(false);
            })
    }


    return (
            <div className='loginPage'>
                <h1 className='login'>SignUp</h1>
                <form>
                    <label className='label'>
                        Email
                    </label>
                    <input type='text' value={email} onChange={(e) => setEmail(e.target.value)}/>
                    <label className='label'>
                        Password
                    </label>
                    <input type="password" value={password} onChange={(e) => setPassword(e.target.value)}/>
                    <button className='loginbtn' onClick={onClick}>SignUp</button>
                    <button className='signbtn' onClick={changeForm}>SignUp/Login</button>
                </form>
            </div>
    )
}