import React from "react";
import { useHistory } from "react-router-dom";
import "./css/cloneBanner.css";
function CloneBanner(){
    const history=useHistory();
    return (
        <div className="banner">
            <div className="banner__info bg-dark text-white">
                <h1>This is Banner Heading</h1>
                <p>Some more text about the app</p>
                <button className="btn" onClick={()=>history.push("/explore/1")}>Explore More</button>
            </div>
        </div>
    );
}
export default CloneBanner;