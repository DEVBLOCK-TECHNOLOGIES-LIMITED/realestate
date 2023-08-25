import React from "react";

function Home(){
    return(
        <div className="home">
            <div className="banner">
                <h1>Agents. Tours. Loans. Homes.</h1>
                <input type="text" placeholder="Search with home features & locations"/>
            </div>
            <section className="width-80">
                <div className="sign-in">
                    <article>
                        <h3>Get home recommendations</h3>
                        <p>Sign in for a more personalized experience.</p>
                        <a>Sign in</a>
                    </article>
                    <figure>
                        <img src="" alt="" />
                    </figure>
                </div>

                <div className="cta">
                    <div>
                        <img src="" alt="" />
                        <article>
                            <h4>Buy a home</h4>
                            <p>Find your place with an immersive photo experience and the most listings, including things you won’t find anywhere else.</p>
                            <a>Browse homes</a>
                        </article>
                    </div>

                    <div>
                    <img src="" alt="" />
                        <article>
                            <h4>Buy a home</h4>
                            <p>Find your place with an immersive photo experience and the most listings, including things you won’t find anywhere else.</p>
                            <a>Find a local agent</a>
                        </article>
                    </div>

                    <div>
                    <img src="" alt="" />
                        <article>
                            <h4>Buy a home</h4>
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
            </section>
        </div>
    )
}


export default Home