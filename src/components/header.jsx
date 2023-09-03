import React from "react";
import { Link } from "react-router-dom";
import { HiOutlineMenuAlt2 } from 'react-icons/hi'
import logo from './images/logo.png'
import { BiSearch } from 'react-icons/bi'

function Header() {
    return (
        <div>

            <div className="bigscreen">
            <header className="bdevice">
                <div>
                    <ul>
                        <li>
                            <Link to='buy'>Buy</Link>
                        </li>
                        <li>Rent</li>
                        <li>Sell</li>
                        <li>
                            <Link to='add'>Add property</Link>
                        </li>  
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

            
            <div className="banner">
                <h1>Agents. Tours. Short-Stay. Homes.</h1>
                <div className="search">
                    <input type="text" placeholder="Search with home features & locations" />
                    <BiSearch size={30} />
                </div>
            </div>
            </div>

            <div className="smallscreen">
            <header className="sdevice">
                <HiOutlineMenuAlt2  size={25} />

                <div className="logo">
                    <img src={logo} alt="" srcset="" />
                </div>

                <p>Sign In</p>
            </header>

            <div className="banner">
                <h1>Agents. Tours. Short-Stay. Homes.</h1>
                <div className="search">
                    <input type="text" placeholder="Search with home features & locations" />
                    <BiSearch size={30} />
                </div>
            </div>
            </div>

        </div>
    )
}


export default Header