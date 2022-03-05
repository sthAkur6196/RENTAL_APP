import React from "react";
import "./css/cloneExploreResult.css";
function CloneExploreResult({img,location,title,description,star,price}){
    return <div className="exploreResult">
        <img src={img} alt="Room Image" />
        <h5>Verified</h5>
        <div className="exploreResult__info">
            <div className="exploreResult__infoTop">
                <p>{location}</p>
                <h3>{title}</h3>
                <p>{description}</p>
            </div>
            <div className="exploreResult__infoBottom">
                <div className="exploreResult__stars">
                    <strong>{star}</strong>
                </div>
                <div className="exploreResult__price">
                    <h4>{price}</h4>
                </div>
            </div>
        </div>
    </div>
}
export default CloneExploreResult;