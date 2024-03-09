import React from "react";
import Dashboardheader from "../../components/dashboardheader";
import './learningpath.css';


const Start = () => {

  return (
    <div>
      <Dashboardheader />
      <div className="mylearningpaths">
      <h1 className="h1">My Learning Path</h1>
      <div className="mylearningpath">
      <div class="Wrapper-sc-fvyqwl-1 iZEyIQ AssignmentList__Timeline-sc-1t9paan-2 chIzFH">
          <ul className="Circle-sc-fvyqwl-1">
            <li>
              <div class="Circle-sc-fvyqwl-0 jNeOpF">
                </div>
                </li>
                <li>
                  <div class="Circle-sc-fvyqwl-0 lfeMSB lfem">
                    </div>
                    </li>
                    <li>
                      <div class="Circle-sc-fvyqwl-0 lfeMSB lfems">
                        </div>
                        </li>
                        <li>
                    <div class="Circle-sc-fvyqwl-0 lfeMSB lfembs">
                      </div>
                  </li>
              </ul>
          </div>
        <div className="mypython">
              <p className="pythoncourses1">Python Course</p>
              <p className="pythoncourses2">IoT using RPI and Python Course</p>
              <p className="pythoncourses3">IoT using Arduino Course</p>
              <p className="pythoncourses4">Smart Shoe using ESP32 Course</p>
        </div>
  </div>
  
      <h2 className="h2">Major Milestone</h2>
    </div>
    </div>
  );
};

export default Start;