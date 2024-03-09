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








/*import React from "react";
import { Box, Typography } from "@mui/material";
import './learningpathprogress.css';


const Learningpathprogress = ({ progress = 0, size = 150 }) => {
  const radius = size / 2;
  const circumference = 2 * Math.PI * radius;
  const offset = circumference - (progress / 100) * circumference;

  return (
    <Box position="relative">
      <svg width={size} height={size}>
        <circle
          cx={radius}
          cy={radius}
          r={radius - 5} // Adjust the thickness of the circle
          fill="none"
          stroke="#ddd" // Background color of the circle
          strokeWidth="10" // Adjust the thickness of the circle
        />
        <circle
          cx={radius}
          cy={radius}
          r={radius - 5}
          fill="none"
          stroke="#5d38ba" // Progress color
          strokeWidth="10" // Adjust the thickness of the circle
          strokeDasharray={`${circumference} ${circumference}`}
          strokeDashoffset={offset}
        />
      </svg>
      <Box
        position="absolute"
        top="50%"
        left="50%"
        transform="translate(-50%, -50%)"
        textAlign="center"
      >
        <Typography variant="h5" color="blue" fontWeight="bold" style={{ lineHeight: "1", marginTop: "-10px",fontSize: "24px"}}>
          {progress}%
        </Typography>
      </Box>
    </Box>
  );
};

export default Learningpathprogress;*/








/*import React from "react";
import './dashboardheader.css';
const LearningpathProgress = () => {
  return (
  <div className="dashboard">
    <div className="dashboard">
    <h1 className="learningpathprogress">Learning path Progress </h1>
    </div>
  </div>
  )
}

export default LearningpathProgress;*/


/*import React from "react";
import './learningpathprogress.css';

const LearningPathProgress = ({ percentage }) => {

  return (
    <div className="learning-path-progress">
      <h1 className="learning-path-progress-title">Learning Path Progress</h1>
      <div className="progress-circle">
        <svg viewBox="0 0 36 36" className="circular-chart orange">
          {/* Outer Circle */
          /*<circle className="circle-bg-outer" cx="18" cy="18" r="15.9155" />
          {/* Inner Circle */
          /*<circle className="circle-bg-inner" cx="18" cy="18" r="13" />
          {/* Progress Circle */
          /*<path
            className="circle"
            strokeDasharray={`${percentage}, 100`}
            d="M18 4
            a 14 14 0 0 1 0 28
            a 14 14 0 0 1 0 -28"
          />
        </svg>
        <div className="progress-text">
          <span className="percentage">{percentage}%</span>
        </div>
      </div>
    </div>
  );
};

export default LearningPathProgress;*/


/*import { Box, useTheme } from "@mui/material";
import { tokens } from "../theme";

const ProgressCircle = ({ progress = "0.75", size = "40" }) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const angle = progress * 360;
  return (
    <Box
      sx={{
        background: `radial-gradient(${colors.primary[400]} 55%, transparent 56%),
            conic-gradient(transparent 0deg ${angle}deg, ${colors.blueAccent[500]} ${angle}deg 360deg),
            ${colors.greenAccent[500]}`,
        borderRadius: "50%",
        width: `${size}px`,
        height: `${size}px`,
      }}
    />
  );
};

export default ProgressCircle;*/