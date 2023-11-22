import React from "react";
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import {createUserWithEmailAndPassword} from "firebase/auth";
import {auth} from "../firebase.js";
import FormControl from "@mui/material/FormControl";
import FormHelperText from "@mui/material/FormHelperText";

export default function SignUp({email, setEmail, password, setPassword, setIsLogin, setIsLogged}) {

    const changeForm = (e) => {
        e.preventDefault()
        setIsLogin(true)
    }

    const onClick = (e) => {
        e.preventDefault()
        handleSignUp()
    }

    const handleSignUp = () => {
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

    const handleKeyPress = (e) => {
        if (e.key === 'Enter') {
            handleSignUp();
        }
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
                        <FormHelperText error>{}</FormHelperText>
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
                        <FormHelperText error>{}</FormHelperText>
                    </FormControl>
                    <Button
                        variant='contained'
                        color='success'
                        className='loginbtn'
                        onClick={onClick}>SignUp
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