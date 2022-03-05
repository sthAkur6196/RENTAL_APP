import React from "react";
import "./css/cloneThankyou.css";
import auth from "./cloneAuthService.js";
function CloneThankyou(){
    let user=auth.getUser();
    return <div className="container text-center">
        <h2>Thankyou {user ? user[0].name : ""} for booking!</h2>
        <h3>Our executive will contact you soon.</h3>
    </div>;
}
export default CloneThankyou;