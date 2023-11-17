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
        <div className='mainLoginPage'>
            <div className='title'>
                <h1 className='mnemonicTitle'>Mnemonic</h1>
                <h2 className='cardsTitle'>Cards</h2>
            </div>
            <div className='loginPage'>
                <h1 className='login'>SignUp</h1>
                <form>
                    <label htmlFor='email' className='label'>
                        Email
                    </label>
                    <input id='email' type='text' value={email} onChange={(e) => setEmail(e.target.value)}/>
                    <label htmlFor='password' className='label'>
                        Password
                    </label>
                    <input id='password' type="password" value={password}
                           onChange={(e) => setPassword(e.target.value)}/>
                    <button className='loginbtn' onClick={onClick}>SignUp</button>
                    <button className='signbtn' onClick={changeForm}>SignUp/Login</button>
                </form>
            </div>
        </div>
    )
}