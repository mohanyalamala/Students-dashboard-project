import React,{useState} from "react";
//import { Typography, Box } from "@mui/material";  // Import Typography and Box from Material-UI
import Dashboardheader from "../../components/dashboardheader";
import {Link} from "react-router-dom";
//import Start from "./start";
import './learningpath.css';

const LearningPath = () => {
  const [showStart, setShowStart] = useState(false);
  const [showStarted, setShowStarted] = useState(false);

  
  const handleStartClick = () => {
    // Toggle the state to show/hide notifications
    setShowStart(!showStart);
    setShowStarted(!showStarted);

  };
    
    return (
      <di className="standardflexs">
          <Dashboardheader />
        <div className="standardflex">
        <div className="standard1">
          <h1 className="standard">Use Our<br/>Standard<br/>Learning Path</h1>
          {/*<button className="start">START</button>*/}
        <Link to="./start" style={{ textDecoration: "none" }} >
        <button className="start" onClick={handleStartClick}>
          START
          </button>
        </Link>
        </div>
        <div className="standard2">
        <h1 className="standard">Customized<br/>Learning Path<br/>With AI</h1>
        <Link to="./started" style={{ textDecoration: "none" }} >
        <button className="start1" onClick={handleStartClick}>
          START
          </button>
          </Link>
        </div>
        </div>
        </di>
    );
};

export default LearningPath;