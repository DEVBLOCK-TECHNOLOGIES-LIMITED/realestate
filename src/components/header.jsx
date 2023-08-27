import React from "react";
import logo from './images/logo.PNG'
import { Link } from "react-router-dom";
import {HiOutlineMenuAlt2} from 'react-icons/hi'

function Header(){
    return(
        <>
            <header className="bdevice">
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
                    <li>
                        <Link to='advertise'>Advertise</Link>
                    </li>
                    <li>Help</li>
                    <li>Sign In</li>
                </ul>
            </div>
        </header>

        <header className="sdevice">
            <HiOutlineMenuAlt2 size={25}/>

            <div className="logo">
            <img src={logo} alt="" srcset="" />
            </div>

            <p>Sign In</p>
        </header>
        </>
    )
}


export default Header