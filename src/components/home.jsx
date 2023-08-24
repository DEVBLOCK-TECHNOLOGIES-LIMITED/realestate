import React from "react";

function Home(){
    return(
        <div className="home">

            <div className="banner">
                <h1>Agents. Tours. Loans. Homes.</h1>
                <input type="text" placeholder="Search with home features & locations"/>
            </div>

            <div className="sign-in">
                <div>
                    <h3>Get home recommendations</h3>
                    <p>Sign in for a morw personalized experience</p>
                    <button>Sign in</button>
                </div>
            </div>

            <div className="cta">
                <div>
                    <img src="" alt="" />
                    <article>
                        <h4>Buy a home</h4>
                        <p>Find your place with an immersive photo experience and the most listings, including things you won’t find anywhere else.</p>
                        <button>Browse homes</button>
                    </article>
                </div>

                <div>
                <img src="" alt="" />
                    <article>
                        <h4>Buy a home</h4>
                        <p>Find your place with an immersive photo experience and the most listings, including things you won’t find anywhere else.</p>
                        <button>Find a local agent</button>
                    </article>
                </div>

                <div>
                <img src="" alt="" />
                    <article>
                        <h4>Buy a home</h4>
                        <p>Find your place with an immersive photo experience and the most listings, including things you won’t find anywhere else.</p>
                        <button>Find rentals</button>
                    </article>
                </div>
            </div>
        </div>
    )
}


export default Home