import React from "react";
import './css/listings.css'

function Listings({products}){
    return(
        <div className="listings">
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

    )
}

export default Listings