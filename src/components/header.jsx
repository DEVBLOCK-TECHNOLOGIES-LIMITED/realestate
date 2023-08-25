import React from "react";
import logo from './images/logo.png'

function Header(){
    return(
        <div className="header">
            <div>
                <ul>
                    <li>Buy</li>
                    <li>Rent</li>
                    <li>Sell</li>
                    <li>Home Loans</li>
                    <li>Agent finder</li>
                </ul>
            </div>
            
            <div className="logo">
                <img src={logo} alt="" />
            </div>

            <div>
               <ul>
                    <li>Manage Rentals</li>
                    <li>Advertise</li>
                    <li>Help</li>
                    <li>Sign In</li>
                </ul>
            </div>
        </div>
    )
}


export default Header