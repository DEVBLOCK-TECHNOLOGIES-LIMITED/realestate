import React from "react";
import { Link } from "react-router-dom";
import footerImage from './images/footer-art.svg'
import buyImage from './images/Buy_a_home.webp'
import rentImage from './images/Rent_a_home.webp'
import payImage from './images/Buy_a_home.webp'
import signinImage from './images/pexels-binyamin-mellish-1396122.jpg'

function Home(){
    return(
        <div className="home">
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
                      <Link>
                        <img src={payImage} alt="" />
                        <article>
                            <h4>Buy a home</h4>
                            <p>Find your place with an immersive photo experience and the most listings, including things you won’t find anywhere else.</p>
                            <button>Browse homes</button>
                        </article>
                      </Link>
                    </div>

                    <div>
                      <Link>
                        <img src={buyImage} alt="" />
                        <article>
                            <h4>Buy a home</h4>
                            <p>Find your place with an immersive photo experience and the most listings, including things you won’t find anywhere else.</p>
                            <button>Find a local agent</button>
                        </article>
                      </Link>
                    </div>

                    <div>
                      <Link>
                        <img src={rentImage} alt="" />
                        <article>
                            <h4>Rent a home</h4>
                            <p>Find your place with an immersive photo experience and the most listings, including things you won’t find anywhere else.</p>
                            <button>Find rentals</button>
                        </article>
                      </Link>
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