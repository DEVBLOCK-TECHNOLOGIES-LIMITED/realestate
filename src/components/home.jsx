import React from "react";
import {BiSearch} from 'react-icons/bi'
import footerImage from './images/footer-art.svg'
import buyImage from './images/Buy_a_home.webp'
import rentImage from './images/Rent_a_home.webp'
import payImage from './images/Buy_a_home.webp'
import signinImage from './images/pexels-binyamin-mellish-1396122.jpg'

function Home(){
    return(
        <div className="home">
            <div className="banner">
                <h1>Agents. Tours. Short-Stay. Homes.</h1>
                <div className="search">
                <input type="text" placeholder="Search with home features & locations"/>
                <BiSearch size={30}/>
                </div>
            </div>
            <section className="width-80">
                <div className="sign-in">
                    <article>
                        <h3>Get home recommendations</h3>
                        <p>Sign in for a more personalized experience.</p>
                        <a>Sign in</a>
                    </article>
                    <figure>
                        <img src={signinImage} alt="" />
                    </figure>
                </div>

                <div className="cta">
                    <div>
                        <img src={payImage} alt="" />
                        <article>
                            <h4>Buy a home</h4>
                            <p>Find your place with an immersive photo experience and the most listings, including things you won’t find anywhere else.</p>
                            <a>Browse homes</a>
                        </article>
                    </div>

                    <div>
                    <img src={buyImage} alt="" />
                        <article>
                            <h4>Buy a home</h4>
                            <p>Find your place with an immersive photo experience and the most listings, including things you won’t find anywhere else.</p>
                            <a>Find a local agent</a>
                        </article>
                    </div>

                    <div>
                    <img src={rentImage} alt="" />
                        <article>
                            <h4>Rent a home</h4>
                            <p>Find your place with an immersive photo experience and the most listings, including things you won’t find anywhere else.</p>
                            <a>Find rentals</a>
                        </article>
                    </div>
                </div>

                <div className="dropdown">
                    <div>
                        <h5>Real Estate</h5>
                    </div>
                    <div>
                        <h5>Rentals</h5>
                    </div>
                    <div>
                        <h5>Mortgage Rates</h5>
                    </div>
                    <div>
                        <h5>Browse Homes</h5>
                    </div>

                </div>

                <div className="footer">
                    <img src={footerImage} alt="" srcset="" />
                </div>
            </section>
        </div>
    )
}


export default Home