import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck, faTimes } from "@fortawesome/free-solid-svg-icons";
import {Link} from "react-router-dom";
import "./bestplan.css";

const Bestplan = () => {
    return (
            <div className="Choose-Servicess">
              <p className="Choose-Servicess-span"><span className="choosespan">Choose </span><span>annual Billing</span><span className="choosespan"> and get</span><span> 3 months.</span></p>
              <div className="Choose-Serviceses">
                {/* <p className="spanbusiness"><span>
                We want to help set your business on the path of success.
                  </span> */}
                  <p>
                  <div className="inr2-3-lakh-flex inrperflex">
                  <div className="inr2-3">
                    <div className="Productsp">
                    <h1><span className="singlemembership">Single Membership</span></h1>
                    <h1 className="singlemembership1"><span className="singlemembership-mo">$30/</span><span className="singlemembership-month">month</span></h1>
                    <h3 className="singlemembership2"><span className="per-month">30 $ Per User</span></h3>
                    <p className="singlemembership3"><span className="for-single-month">For single member</span></p>
                    </div>
                    <div className="flex-Internet-of-Things">
                      <div className="Internet-of-Things-1">
                        <p> <FontAwesomeIcon icon={faCheck} className="fontawsomeicon" />
                        Unlimited Access to All Online Courses</p>
                        <p><FontAwesomeIcon icon={faCheck} className="fontawsomeicon" />
                        Mobile App For Easy</p>
                        <p><FontAwesomeIcon icon={faCheck} className="fontawsomeicon" />
                       Newsletter Updates</p>
                        <p><FontAwesomeIcon icon={faCheck} className="fontawsomeicon" />
                        Email & chat Support</p>
                        <p><FontAwesomeIcon icon={faCheck} className="fontawsomeicon" />
                        Coding Classes with 1000+ Challenges</p>
                        <p><FontAwesomeIcon icon={faCheck} className="fontawsomeicon" />
                        Digital Transformation Technology Training </p>
                        <p><FontAwesomeIcon icon={faCheck} className="fontawsomeicon" />
                        Mini Project + Major Project </p>
                        <p><FontAwesomeIcon icon={faCheck} className="fontawsomeicon" />
                        In-House Internship </p>
                        <p><FontAwesomeIcon icon={faCheck} className="fontawsomeicon" />
                        Hackathons Support </p>
                        <p><FontAwesomeIcon icon={faTimes} className="fontawsomeicon" />
                        External Internship Assurance</p>
                        <p><FontAwesomeIcon icon={faTimes} className="fontawsomeicon" />
                        Placement Support Assurance </p>
                        <p><FontAwesomeIcon icon={faTimes} className="fontawsomeicon" />
                        Real-Time Industry Projects </p>
                        </div>
                      <Link to="/purchase">
                      <button className="buttonget" id="buttonget1">Purchase</button>
                      </Link>
                    </div>
                    </div>
                    <div className="inr2-4">
                    <h1><span className="singlemembership">CorporateSkills Hub</span></h1>
                    <h1 className="singlemembership1"><span className="singlemembership-mo">$1,000/</span><span className="singlemembership-month">month</span></h1>
                    <h3 className="singlemembership2"><span className="per-month">20 $ Per User</span></h3>
                    <p className="singlemembership3"><span className="for-single-month">Starting from 50 shared seats</span></p>
                    <div className="flex-Internet-of-Things">
                      <div className="Internet-of-Things-1">
                        <p><FontAwesomeIcon icon={faCheck} className="fontawsomeicon" />
                        Unlimited Access to All Online Courses</p>
                        <p><FontAwesomeIcon icon={faCheck} className="fontawsomeicon" />
                        Mobile App for Easy Watching</p>
                        <p><FontAwesomeIcon icon={faCheck} className="fontawsomeicon" />
                        Newsletter Updates</p>
                        <p><FontAwesomeIcon icon={faCheck} className="fontawsomeicon" />
                        Email & Chart support</p>
                        {/* <p><FontAwesomeIcon icon={faCheck} className="fontawsomeicon" />
                        Coding Classes with 1000+ Challenges</p>
                        <p><FontAwesomeIcon icon={faCheck} className="fontawsomeicon" />
                        Digital Transformation Technology Training</p>
                        <p><FontAwesomeIcon icon={faCheck} className="fontawsomeicon" />
                        Mini Project + Major Project</p>
                        <p><FontAwesomeIcon icon={faCheck} className="fontawsomeicon" />
                        In-House Internship</p>
                        <p><FontAwesomeIcon icon={faCheck} className="fontawsomeicon" />
                        Hackathons Support</p>
                        <p><FontAwesomeIcon icon={faCheck} className="fontawsomeicon" />
                        External Internship Assurance</p>
                        <p><FontAwesomeIcon icon={faCheck} className="fontawsomeicon" />
                        Placement Support Assurance </p>
                        <p><FontAwesomeIcon icon={faCheck} className="fontawsomeicon" />
                        Real-Time Industry Projects with Real Companies</p> */}
                        </div>
                        <Link to="/purchase">
                      <button className="buttonget" id="buttonget1">Purchase</button>
                      </Link>
                    </div>
                  </div>
                  </div>
                  </p>
              </div>
              </div>
    )
}

export default Bestplan;