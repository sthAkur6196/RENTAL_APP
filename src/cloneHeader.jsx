import React from "react";
import { useHistory } from "react-router-dom";
import "./cloneHeader.css";
import "./cloneHeader.js";
import "bootstrap/js/src/collapse.js";
function CloneHeader(props){
    const history=useHistory();
    const {user}=props;
    return(
        <nav className="navbar-local">
            <div className="brand-title">
                App Icon
            </div>
            <a href="#" className="toggle-button">
                <span className="bar"></span>
                <span className="bar"></span>
                <span className="bar"></span>
            </a>
            <div className="navbar-links">
                <ul>
                    <li><a href="#">Properties</a></li>
                    <li><a href="#">Rental Agreement</a></li>
                    <li><a href="#">Contact</a></li>
                    <li><a href="#">Login/Signup</a></li>
                </ul>
            </div>
        </nav>
        /*<nav className="navbar navbar-expand-sm"> 
                <div className="container-fluid">
                <a className="navbar-brand" onClick={()=>history.push("/home")}>App Icon</a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#collapsibleNavbar" onClick={()=>setShow(!show)}>
                    <span className="navbar-toggler-icon"></span>X
                </button>
                <div className={show ? "collapse navbar-collapse" : "collapse navbar-collapse active"} id="collapsibleNavbar">
                    <ul className="navbar-nav ms-auto">
                        <li className="nav-item">
                            <a className="nav-link" onClick={()=>history.push("/explore")}>Properties</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" onClick={()=>history.push("/rental-agreement")}>Rental Agreement</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" onClick={()=>history.push("/contact")}>Contact</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" onClick={()=> !user ? history.push("/login") : history.push("/logout")}>
                                {!user ? "Login / Signup" : "Logout"}
                            </a>
                        </li>
                    </ul>  
                </div>
                </div>
    </nav>*/
    )
}
export default CloneHeader;