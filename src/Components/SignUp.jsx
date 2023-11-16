import React from "react";

export default function SignUp({email, setEmail, password, setPassword, onClick, setIsLogin}) {

    const changeForm = (e) => {
        e.preventDefault()
        setIsLogin(true)
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