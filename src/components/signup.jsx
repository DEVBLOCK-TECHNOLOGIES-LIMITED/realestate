import React from "react";
import { Link } from "react-router-dom";
import './css/signup.css'

function Signup(){
    return(
        <div className="signup">
            <h1>Sign in</h1>
            <h3>Please enter your details to sign un.</h3>

            <button>Sign up with Google</button>

            <span>or Sign up with your Email</span>

            <form action="">
                <label htmlFor="email">Email</label>
                <input type="email" name="email" placeholder="Enter your Email"/>

                <label htmlFor="password">Password</label>
                <input type="password" name="password" placeholder="Enter your password"/>

                <input type="submit" value='Sign up'/>
                <p>Don't have an account? <Link to='/login'>Login</Link></p>
            </form>
        </div>
    )
}

export default Signup