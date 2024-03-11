import React from "react";
import {Link} from "react-router-dom";
import { Close as CloseIcon } from "@mui/icons-material";
// import Students from "../images/popup/2.png";
import "./homelogin.css";


function Model({setOpenModel}) {

    return (
        <div className="modalBackground">
            <div className="titleCloseBtn">
                <CloseIcon className="closemodal" onClick={() => {
                   setOpenModel(false);
                    }}  />
            </div>
            <div className="learncenter">
        <video className="background-video" autoPlay loop muted playsInline>
            <source
                src={require("../images/HUEBITS(1).mp4")}
                type="video/mp4"
            />
            Your browser does not support the video tag.
        </video>
        <div className="video-overlaypapupflex">
            <Link to="/login">
                <button className="video-overlaypapups-1">
                Students Sign In 
                </button>
            </Link>
            <Link to="/transformation">
                <button className="video-overlaypapup-1">
                Companies Sign In
                </button>
            </Link>
            </div>
            </div>
            </div>
    )
}

export default Model;
