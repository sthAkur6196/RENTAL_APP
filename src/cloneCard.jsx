import React from "react";
import "./css/cloneCard.css";
function CloneCard({src,title,description,price}){
    return (<div className="card">
            <img src={src} alt="Card Image" />
            <div className="card__info">
                <h2>{title}</h2>
                <h5>{description}</h5>
                <h4>{price ? `Rs ${price}` : ""}</h4>
            </div>
    </div>)
}
export default CloneCard;