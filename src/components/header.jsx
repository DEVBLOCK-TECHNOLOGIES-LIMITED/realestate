import React from "react";
import { Link } from "react-router-dom";
import { HiOutlineMenuAlt2 } from 'react-icons/hi'
import logo from '../assets/images/logo.png'
import { FaUser } from "react-icons/fa";
import { useState, useEffect } from "react";

function Header() {
    const [drawer, setDrawer] = useState(false)

    const openDrawer = () => {
        document.querySelector('.drawer').style.width = '80vw'
    }

    const closeDrawer = () => {
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
<<<<<<< HEAD
                            <li><FaUser /></li>
=======
                            <li>
                                <Link to='login'>
                                    <FaUser/>
                                </Link>
                            </li>
>>>>>>> cee91295d569807ce211522222e2f663d5cfa39d
                        </ul>
                    </div>
                </header>

            </div>

            <div className="smallscreen">
                <header className="sdevice">

                    <div className="menu" onClick={openDrawer}>
                        <HiOutlineMenuAlt2 size={25} />
                    </div>

                    <div className="logo">
                        <Link to='/'><img src={logo} alt="" /></Link>

                    </div>

                    <FaUser />
                </header>
                <div className="drawer">
                    <p onClick={closeDrawer}>

                    </p>
                </div>
            </div>

        </div>
    )
}


export default Header