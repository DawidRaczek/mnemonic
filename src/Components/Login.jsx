import React, {useState} from "react";
import Button from '@mui/material/Button';
import '../Styles/LoginPage.scss';
import {auth} from "../firebase.js";
import {signInWithEmailAndPassword} from 'firebase/auth';
import TextField from "@mui/material/TextField";
import FormControl from '@mui/material/FormControl';
import FormHelperText from '@mui/material/FormHelperText';

export default function Login({email, setEmail, password, setPassword, setIsLogin, setIsLogged}) {
    const [emailError, setEmailError] = useState("");
    const [passwordError, setPasswordError] = useState("");

    const changeForm = (e) => {
        e.preventDefault();
        setIsLogin(false);
    }

    const onClick = (e) => {
        e.preventDefault();
        handleLogin();
    }

    const handleLogin = () => {
        // Resetowanie błędów przed każdym logowaniem
        setEmailError("");
        setPasswordError("");

        // Walidacja e-maila
        if (!email) {
            setEmailError("Email is required");
            return;
        }

        // Walidacja hasła
        if (!password) {
            setPasswordError("Password is required");
            return;
        }

        signInWithEmailAndPassword(auth, email, password)
            .then((data) => {
                console.log(data);
                setIsLogged(true);
                localStorage.setItem('isLogged', true);
            })
            .catch((error) => {
                console.log(error);
                // Obsługa błędów logowania
                setEmailError("Invalid email or password");
                setIsLogged(false);
            });
    }

    const handleKeyPress = (e) => {
        if (e.key === 'Enter') {
            handleLogin();
        }
    }

    return (
        <div className='mainLoginPage'>
            <div className='title'>
                <h1 className='mnemonicTitle'>Mnemonic</h1>
                <h2 className='cardsTitle'>Cards</h2>
            </div>
            <div className="loginPage">
                <h1 className='login'>Login</h1>
                <form>
                    <FormControl>
                        <TextField
                            id='outlined-basic'
                            label='Email'
                            InputProps={{
                                style: {color: 'white'},
                            }}
                            type='text'
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            onKeyDown={handleKeyPress}
                        />
                        <FormHelperText error>{emailError}</FormHelperText>
                    </FormControl>

                    <FormControl>
                        <TextField
                            id='outlined-password-input'
                            label='Password'
                            InputProps={{
                                style: {color: 'white'},
                            }}
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            onKeyDown={handleKeyPress}
                        />
                        <FormHelperText error>{passwordError}</FormHelperText>
                    </FormControl>

                    <Button
                        variant='contained'
                        color='success'
                        className='loginbtn'
                        onClick={onClick}>Login
                    </Button>
                    <Button
                        variant='outlined'
                        color='error'
                        className='signbtn'
                        onClick={changeForm}>SignUp/Login
                    </Button>
                </form>
            </div>
        </div>
    )
}
