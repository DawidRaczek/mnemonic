import React from "react";
import '../Styles/LoginPage.css'

export default function Login({email, setEmail, password, setPassword, onClick, setIsLogin}) {

    const changeForm = (e) => {
        e.preventDefault()
        setIsLogin(false)
    }


    return (
            <div className="loginPage">
                <h1 className='login'>Login</h1>
                <form>
                    <label>
                        Email
                    </label>
                    <input type='text' value={email} onChange={(e) => setEmail(e.target.value)}/>
                    <label>
                        Password
                    </label>
                    <input type="password" value={password} onChange={(e) => setPassword(e.target.value)}/>
                    <button className='loginbtn' onClick={onClick}>Login</button>
                    <button className='signbtn' onClick={changeForm}>SignUp/Login</button>
                </form>
            </div>
    )
}