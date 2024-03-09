import React from "react";
import Headerpage from "../Headerpage/Headerpage";
import {Link} from "react-router-dom";
import huebits from "../Companies/huebits.png";
import "./Aboutus.css";

const Aboutus = () =>{
    
    return (
        <div className="aboutus-flex">
        <Headerpage />
        <div className="getstarted-flex">
            <ul>
                <li><h1>Where brilliant minds</h1>
                <h2>help you build your product
                <span>Our experts and innovators helps startups /companies build Prototypes/Proof of Concepts / Products</span></h2></li>
                <Link to="/login"><button className="buttonget">Get Started</button></Link>
                <button className="buttonget" id="buttonget1">Learn More</button>
                </ul>
                <div>
                <img className="huebitsimg" src={huebits} alt=""/>
                </div>
            </div>
        </div>
    )
}

export default Aboutus;


