import React, {useState} from "react";
import './Login.css'
import { Link} from "react-router-dom";
import { useHistory } from "react-router-dom";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword  } from 'firebase/auth';
import { auth } from "./firebase.js";


function Login() {
    //TODO: redirect from browseHistroy to homepage -> "/"
    // const history = useHistory(); 
    // function handleClick() {
    //     history.push("/");
    //   }    

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const signIn = e => {
        e.preventDefault();

        signInWithEmailAndPassword(auth, email, password)
        .then(auth => {
            //history.push('/')
            console.log('Its OK!!!')
        })
        .catch(error => alert(error.message))
    }

    const register = e => {
        e.preventDefault()

        createUserWithEmailAndPassword(auth, email, password)
            .then((auth) => {
                //its succesfully created a new user with email and password
                //console.log(auth);
                //history.push("/");
            })
            .catch(error => alert(error.message));
    }

    return (
        <div className="login">
            <Link to="/">
                <img className="login__logo" src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png" alt="" />
            </Link>

            <div className="login__container">
                <h1>Sign In</h1>

                <form action="">
                    <h5>E-mail</h5>
                    <input type="text" value={email} onChange={e => setEmail(e.target.value)}/>

                    <h5>Password</h5>
                    <input type="password" value={password} onChange={e => setPassword(e.target.value)}/>

                    <button className="login__signInButton" type="submit" onClick={signIn}>Sign In</button>
                </form>

                <p>
                    By signin-in you agree to the AMAZON FAKE CLONE(EDUCATIONAL SITE) Conditions of Use & Sale. Please see our Privacy Notice , our Cookies Notise and our Interest-Based Ads Notice.
                </p>

                <button className="login__registerButton" onClick={register}>Create your Amazon account</button>

            </div>
        </div>
    )
}

export default Login
