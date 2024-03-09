import React from "react";
import {Link} from "react-router-dom";
import Headrepage from "../Projects/Headerpage";
// import Backgroundcompaniesimage from "./images/premium_photo-1667516764926-c4ac7e9a14cd.jpg";
// import Backgroundcompaniesimages from "./images/ordinary-human-job-performed-by-anthropomorphic-robot.jpg";
import "./Homepagespostprojects.css";

const Postprojectshomepage = () => {
    return (
        <div className="students-flex">
            <Headrepage />
        <div className="backgroundcompaniesimage">
        <div className="backgroundcompaniesimage-1">
        {/* <div className="backgroundimagescompainesflex">
        <img className="backgroundimagescompaines-1" src={Backgroundcompaniesimage} alt=""/>
        <img className="backgroundimagescompaines" src={Backgroundcompaniesimages} alt=""/>
        </div> */}
        <Link to="/postproject1">Post A Projects</Link>
        </div>
        </div>
        </div>
    )
}



export default Postprojectshomepage;