import React,{useState} from "react";
//import { Typography, Box } from "@mui/material";  // Import Typography and Box from Material-UI
import Dashboardheader from "../../components/dashboardheader";
import {Link} from "react-router-dom";
//import Start from "./start";
import './capstoneaimagic.css';

const Capstoneaimagic = () => {
  const [showcapstoneStart, setShowcapstoneStart] = useState(false);
  
  const handleStartClick = () => {
    // Toggle the state to show/hide notifications
    setShowcapstoneStart(!showcapstoneStart);
  };
    
    return (
        <div>
          <Dashboardheader />
        <div className="capstone1">
          <h1 className="capstone">Capstone AI Magic<br/>Gateway to your Capstone</h1>
          {/*<button className="start">START</button>*/}
        <Link to="./capstonestart" style={{ textDecoration: "none" }} >
        <button className="capstonestart" onClick={handleStartClick}>
          START
          </button>
        </Link>
        </div>
        </div>
    );
};

export default Capstoneaimagic;