import React from "react";
import { Link } from "react-router-dom";
import './css/login.css'

function Login(){
    return(
        <div className="login">
            <h1>Login</h1>
            <h3>Please enter your details to sign in.</h3>

            <button>Sign in with Google</button>

            <span>or Login with your Email</span>

            <form action="">
                <label htmlFor="email">Email</label>
                <input type="email" name="email" placeholder="Enter your Email"/>

                <label htmlFor="password">Password</label>
                <input type="password" name="password" placeholder="Enter your password"/>

                <input type="submit" value='Login'/>
                <p>Don't have an account? <Link to='/signup'>Sign up</Link></p>
            </form>
        </div>
    )
}

export default Login