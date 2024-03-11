import React from "react";
import "./courses.css";


import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

const percentage = 70;

const CoursesProgress = () => {

  return (
    <div className="box1">
  <div className="dashboard">
    <div className="CoursesProgress">
    <h1 className="CoursesProgress1">Courses Progress</h1>
    <div className="courses1-container">
    <div className="courses1">
    <div style={{ padding: "0px 0px 0px 0px" }}>
    <h2 className="coursesprogress">course1
      <CircularProgressbar 
      value={percentage} text={`${percentage}%`} className="course1"
      styles={buildStyles({
        textColor: "white",
        textSize: "30px",
          })}
      />
      </h2>
      </div>
      <div className="courses1">
    <div style={{ padding: "0px 0px 0px 0px" }}>
    <h2 className="coursesprogress">course2
      <CircularProgressbar 
      value={percentage} text={`${percentage}%`} className="course1"
      styles={buildStyles({
        textColor: "white",
        textSize:"30px",
          })}
      />
      </h2>
      </div>
      </div>
      <div className="courses1">
    <div style={{ padding: "0px 0px 0px 0px" }}>
    <h2 className="coursesprogress">course3
      <CircularProgressbar 
      value={percentage} text={`${percentage}%`} className="course1"
      styles={buildStyles({
        textColor: "white",
        textSize: "30px",
          })}
      />
      </h2>
      </div>
      </div>
      <div className="courses1">
    <div style={{ padding: "0px 0px 0px 0px" }}>
    <h2 className="coursesprogress">course4
      <CircularProgressbar 
      value={percentage} text={`${percentage}%`} className="course1"
      styles={buildStyles({
        textColor: "white",
        textSize: "30px",
          })}
      />
      </h2>
      </div>
      </div>
      <div className="courses1">
    <div style={{ padding: "0px 0px 0px 0px" }}>
    <h2 className="coursesprogress">course5courses4
      <CircularProgressbar 
      value={percentage} text={`${percentage}%`} className="course1"
      styles={buildStyles({
        textColor: "white",
        textSize: "30px",
          })}
      />
      </h2>
      </div>
      </div>
    </div>
    </div>
    </div>
    </div>
    </div>
  )
}

export default CoursesProgress;
