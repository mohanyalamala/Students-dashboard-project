import React from "react";
import { CircularProgressbar,buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import "./projectsprogress.css";
import ChangingProgressProvider from "./projectsprogeesprojects.jsx";

const VerticalProgressBar = ({ percentage }) => (
  <div className="vertical-progress-container">
    <h1 className="vertical-progress-heading">Projects Progress</h1>
    <div className="projectsprogress">
      <ChangingProgressProvider values={[50]}>
        {value => (
          <CircularProgressbar
            value={value}
            /*text={`${value}`}*/
            text={`7.5/15`}
            circleRatio={0.50}
            styles={buildStyles({
              rotation: 1 / 2 + 2 / 8,
              strokeLinecap: "butt",
              textColor: "white",
              pathColor: "Indigo",
              trailColor: "MediumPurple",
            })}
          />
        )}
      </ChangingProgressProvider>
    </div>
  </div>
);

export default VerticalProgressBar;
