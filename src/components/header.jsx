import React from "react";
import { Link } from "react-router-dom";
import { HiOutlineMenuAlt2 } from 'react-icons/hi'
import logo from './images/logo.png'
import { BiSearch } from 'react-icons/bi'
import { FaUser } from "react-icons/fa";
import { useState, useEffect } from "react";

function Header() {
    const [drawer, setDrawer] = useState(false)

    const openDrawer = () => {
        document.querySelector('.drawer').style.width = '80vw'
    }

    const closeDrawer =()=>{
        document.querySelector('.drawer').style.width = '0vw'
    }

    return (
        <div>
            <div className="bigscreen">
                <header className="bdevice">
                    <div className="headertab-1">
                        <ul>
                            <li>
                                <Link to='buy'>Buy</Link>
                            </li>
                            <li>
                                <Link to='rent'>Rent</Link>
                            </li>
                            <li>Sell</li>
                            <li>
                                <Link to='add'>Add property</Link>
                            </li>
                            <li>Agent finder</li>
                        </ul>
                    </div>

                    <div className="logo">
                        <Link to='/'><img src={logo} alt="" /></Link>
                    </div>

                    <div>
                        <ul>
                            <li>Manage Rentals</li>
                            <li>
                                <Link to='advertise'>Advertise</Link>
                            </li>
                            <li>Help</li>
                            <li>
                                <Link to='login'>
                                    <FaUser/>
                                </Link>
                            </li>
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
                    
                    <div className="menu" onClick={openDrawer}>
                        <HiOutlineMenuAlt2 size={25} />
                    </div>

                    <div className="logo">
                        <img src={logo} alt="" srcSet="" />
                    </div>

                    <FaUser/>
                </header>
                <div className="drawer">
                    <p onClick={closeDrawer}>
                        
                    </p>
                </div>


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