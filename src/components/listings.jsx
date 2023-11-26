import React from "react";
import './css/listings.css'

function Listings({products}){
    return(
        
        <div className="listings">
            <section className="map"></section>

            <div className="homes">
                {products.map((item)=>{
                    return(
                        <div className="listing">
                            <img src="" alt="" />
                            <p>{item.name}</p>
                            <span>{item.price}</span>
                            <span className="fav"></span>
                        </div>
                    )
                })
                }
            </div>
        </div>

    )
}

export default Listings