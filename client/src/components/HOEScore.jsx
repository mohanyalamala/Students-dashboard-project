/*import React from "react";
import { CircularProgressbar,buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import "./hoescore.css";
import ChangingProgressProvider from "./projectsprogeesprojects.jsx";

const VerticalProgressBar = ({ percentage }) => (
  <div className="hoescoreprogresscontainer">
    <h1 className="hoescoreprogressheading">Hoe Score</h1>
    <div className="hoescoreprogress">
      <ChangingProgressProvider values={[80]}>
        {value => (
          <CircularProgressbar
            value={value}
            /*text={`${value}`}*/
            /*text={`8/10`}
            circleRatio={0.50}
            styles={buildStyles({
              rotation: 1 / 2 + 2 / 8,
              strokeLinecap: "butt",
              textColor: "white",
              pathColor: "yellow",
              trailColor: "lightyellow",
            })}
          />
        )}
      </ChangingProgressProvider>
    </div>
  </div>
);

export default VerticalProgressBar;*/

import React from "react";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import "./hoescore.css";
import ChangingProgressProvider from "./projectsprogeesprojects.jsx";

const getScoreColor = (score) => {
  if (score >= 9) {
    return "green"; 
  } else if (score >= 7) {
    return "#90EE90"; 
  } else if (score >= 4) {
  return "yellow"; 
}
   else {
    return "red"; // or any color you prefer for a low score
  }
};

const VerticalProgressBar = () => (
  <div className="hoescoreprogresscontainer">
    <h1 className="hoescoreprogressheading">Hoe Score</h1>
    <div className="hoescoreprogress">
      <ChangingProgressProvider values={[8]}>
        {value => (
          <CircularProgressbar
            value={(value / 10) * 100} // Calculate the percentage
            text={`${value}/10`}
            circleRatio={0.50}
            styles={buildStyles({
              rotation: 1 / 2 + 2 / 8,
              strokeLinecap: "butt",
              textColor: "white",
              pathColor: getScoreColor(value),
              trailColor: "lightyellow",
            })}
          />
        )}
      </ChangingProgressProvider>
    </div>
  </div>
);

export default VerticalProgressBar;