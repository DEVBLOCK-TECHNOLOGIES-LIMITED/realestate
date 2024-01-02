import React from "react";
import './css/listings.css'
import { useEffect } from "react";

function Listings({products}){
    useEffect(()=>{
        window.scrollTo(0,0)
    },[])
    return(
        
        <div className="listings">

            <div className="filter">
                <p>make</p>
            </div>
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