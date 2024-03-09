/*import React from "react";
import "./courses.css";

import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

const courseData = [
  { name: "Course1", progress: 70 },
  { name: "Course2", progress: 50 },
  { name: "Course3", progress: 85 },
  // Add more courses as needed
];

const CoursesProgress = () => {
  return (
    <div className="dashboard">
      <div className="CoursesProgress">
        <h1 className="learningpathprogress">Courses Progress</h1>

        {/* Dynamically generate courses */
        /*{courseData.map((course, index) => (
          <div className="courses1">
          <div key={index}>
            <div className="course-container">
              <h2 className="course1">{course.name}
                <CircularProgressbar value={course.progress} text={`${course.progress}%`}/>
                </h2>
            </div>
            </div>
            </div>
        ))}
      </div>
    </div>
  );
};

export default CoursesProgress;*/





import React from "react";
import "./courses.css";


/*import {
  CircularProgressbar,
} from "react-circular-progressbar";*/
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