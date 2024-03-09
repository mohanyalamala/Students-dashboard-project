import React from "react";
import Headerpage from "../Headerpage/Headerpage";
import StudentsHomepage from "./Companies";
import "./StudentsHomePage.css";


const StudentsHome = () => {
    return (
        <div className="studentshomepage">
            <Headerpage />
            <div>
            <StudentsHomepage />
            </div>
        </div>
    )
}


export default StudentsHome;