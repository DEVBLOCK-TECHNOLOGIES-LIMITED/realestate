import { Link } from "react-router-dom";
import buyImage from '../assets/images/For-sale.jpg'
import rentImage from '../assets/images/4153051.jpg'
import payImage from '../assets/images/For-sale.jpg'
import signinImage from '../assets/images/pexels-binyamin-mellish-1396122.jpg'
import { useEffect } from "react";
import Search from "../components/Search";

function Home(){
    useEffect(()=>{
        window.scrollTo(0,0)
    },[])
    return(
        <div className="home">
            <Search/>
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
                      <Link to='buy'>
                        <img src={buyImage} alt="" />
                        <article>
                            <h4>Buy a home</h4>
                            <p>Find your place with an immersive photo experience and the most listings, including things you won’t find anywhere else.</p>
                            <button>Find a local agent</button>
                        </article>
                      </Link>
                    </div>

                    <div>
                      <Link to='rent'>
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
                </div>
            </section>
        </div>
    )
}


export default Home