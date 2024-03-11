import React from "react";
import './learningpathprogress.css';

import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

const percentage = 70;

const Learningpathprogess = () => (
  <div className="box">
  <div style={{ padding: "10px 10px 10px 10px" }}>
    <div className="default1">
    <h1 className="learningpathprogressbar">
    {/*<SchoolOutlinedIcon className="schoolicon" style={{ fontSize: "40px" }}/>*/}
      Learning Path Progress</h1>
    <div className="default">
      <CircularProgressbar 
      value={percentage} text={`${percentage}%`}
      styles={buildStyles({
      textColor: "white",
      /*pathColor: "#ff6e00",*/
      pathColor: "orangered",
      trailColor: "white",
        })}
      />
  </div>
  </div>
  </div>
  </div>
);

export default Learningpathprogess;
