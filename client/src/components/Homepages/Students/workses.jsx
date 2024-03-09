import React from 'react';
import SystemUpdateIcon from './SystemUpdateIcon';
import Stating from "./Setting";
import AwardIconsawared from "./awardsiconsawared ";
import FactoryIcon from "./Factorys";
import BriefcaseIcon from "./Briefcases";
import ShirtBusinessIcon from "./Shirtbusiness";
// import ShirtBusiness from "./images/shirtBusinessIcon.png";

const YourComponentName = () => {
  return (
    <div className="background-colors-works">
      <div>
        <h1 className="how-it-works">How it Works?</h1>
      </div>
      <div className="colorwhitecards">
        <div className="cardflexs-1 colorwhitecard">
          <div className="steps1">
            <SystemUpdateIcon />
            <div className="steps-1">
              <h5 className="step-title">Step-1</h5>
              <p className="step-text">
                <span className="spansp">Choose Digital Transformation Career Path and start learning with us</span>
              </p>
            </div>
          </div>
          <div className="steps2">
            <Stating />
            <div className="steps-2">
              <h5 className="step-title">Step-2</h5>
              <p className="step-text">
                <span className="spansp">Build Industrial projects (Minor/Major)</span>
              </p>
            </div>
          </div>
          <div className="steps3">
            <AwardIconsawared />
            <div className="steps-3">
              <h5 className="step-title">Step-3</h5>
              <p className="step-text">
                <span className="spansp">Get Certifications and Participate in Hackathons</span>
              </p>
            </div>
          </div>
          <div className="steps4">
            <FactoryIcon />
            <div className="steps-4">
              <h5 className="step-title">Step-4</h5>
              <p className="step-text">
                <span className="spansp">Solve Industrial problems, work on Industrial projects and gain experience</span>
              </p>
            </div>
          </div>
          <div className="steps5">
            <BriefcaseIcon />
            <div className="steps-5">
              <h5 className="step-title">Step-5</h5>
              <p className="step-text">
                <span className="spansp">
                  Build a professional network, prove your skills, and get verified feedback from real companies to add to your portfolio
                </span>
              </p>
            </div>
          </div>
          <div className="steps6">
          {/* <img src={ShirtBusiness} alt="Shirt Business Icon" className="ShirtBusinessIcon" /> */}
            <ShirtBusinessIcon />
            <div className="steps-6">
              <h5 className="step-title">Step-6</h5>
              <p className="step-text">
                <span className="spansp">Get Hired</span>
              </p>
            </div>
          </div>
        </div>
      </div>
      </div>
  );
};

export default YourComponentName;