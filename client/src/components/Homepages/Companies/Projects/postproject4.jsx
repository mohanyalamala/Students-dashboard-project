import React, { useState, useEffect, useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import Header from "./Headerpage";

const Postproject4 = () => {
  const navigate = useNavigate();
  const [message, setMessage] = useState(null);
  const [selectedSkills3Array, setSelectedSkills3Array] = useState([]);
  const postDataSelectRef = useRef(null);
  const selectedSkills3InputRef = useRef(null);

  const handlePostDataClick = (event) => {
    if (event.target.tagName === "DIV") {
      const selectedSkills3 = event.target.textContent.trim();
      if (!selectedSkills3Array.includes(selectedSkills3)) {
        setSelectedSkills3Array([...selectedSkills3Array, selectedSkills3]);
        updateSelectedSkills3();
      }
    }
  };

  useEffect(() => {
    const postDataSelect = postDataSelectRef.current;
    if (postDataSelect) {
      postDataSelect.addEventListener("click", handlePostDataClick);

      return () => {
        postDataSelect.removeEventListener("click", handlePostDataClick);
      };
    }
  }, [postDataSelectRef.current, selectedSkills3Array]);

  const updateSelectedSkills3 = () => {
    selectedSkills3InputRef.current.value = selectedSkills3Array
      .slice(0, 9)
      .join(", ");
  };

const handleAddSkill = () => {
    const selectedSkill = postDataSelectRef.current.value;
    if (selectedSkill) {
      if (!selectedSkills3Array.includes(selectedSkill)) {
        setSelectedSkills3Array([...selectedSkills3Array, selectedSkill]);
        updateSelectedSkills3();
      }
      postDataSelectRef.current.value = ""; // Clear the selected value in the dropdown
    }
  };

  const handleInputChange = (event) => {
    // This function will be called when the user edits the input field directly
    const inputSkills = event.target.value;
    const inputSkillsArray = inputSkills.split(",").map((skill) => skill.trim());
    setSelectedSkills3Array(inputSkillsArray.slice(0, 9));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    const Projects = {
      skills2: selectedSkills3InputRef.current.value,
    };

    try {
      const response = await axios.post(
        "http://localhost:8000/api/postproject4",
        Projects,
        {
          withCredentials: true,
        }
      );

      if (response.data.status === "Success") {
        console.log("Postproject submitted successfully");
        console.log("Updated User Data:", response.data.data);
        setMessage("Project Successful");
        setTimeout(() => {
          setMessage(null);
          navigate("/postproject5");
        }, 2000);
      } else {
        console.error("Postproject submission failed");
      }
    } catch (error) {
      console.error(
        "An error occurred during Postproject submission",
        error
      );
      console.error("Error response:", error.response);
    }
  };

  return (
    <div className="postprojects1-header postprojects1-headers">
        <Header />
        <div className="postprojects1-cssimagesflex">
        <div className="postprojects1-css" >
        <div className="postprojects-css-1">
        <form
          action="/postproject4"
          method="POST"
          id="lable"
          onSubmit={handleSubmit}
        >
          <div className="postprojects-css-2">
            <h1 className="container-1">Which tools should the freelancer use?</h1>
            <br />
            <p className="yourproject">
            <span>Do you want the freelancer you hire to use any specific 
            tools to complete the project?</span>
            </p>
            <div className="postprojects-option">
              <div className="postprojects-option-1" id="postData">
                <div className="postprojects-option-2">
                  <select
                    id="postData"
                    className="postprojects-option-select"
                    ref={postDataSelectRef}
                  >
                    <option value="">select option</option>
                    <option>ActiveTrak +</option>
                    <option>Airflow +</option>
                    <option>Alteryx +</option>
                    <option>Ambari +</option>
                    <option>Ansible +</option>
                    <option>Any +</option>
                    <option>AnyLogic +</option>
                    <option>Apache Mahout +</option>
                    <option>Apache Spark +</option>
                  </select>
                  <button type="button" onClick={handleAddSkill}>
                      Add Skill
                    </button>
                  <div className="search">
                    <input
                      type="text"
                      className="postprojects-css-input-1"
                      name="skills2"
                      id="selectedSkills2"
                      placeholder="Select more skills (max of 9)"
                      autoFocus=""
                      required
                      ref={selectedSkills3InputRef}
                      value={selectedSkills3Array.slice(0, 9).join(", ")}
                      onChange={handleInputChange}
                    />
                  </div>
                </div>
                <div className="form-group">
                  <div className="postprojects1-css-button">
                  <p>{message && <span className="postprojectssuccess-message">{message}</span>}</p>
                  </div>
                </div>
                <div className="form-group ">
                  <div className="postprojects-css-button-1 ">
                    <Link to="/postproject3">
                      <button className="buttonget postbutton">Back</button>
                    </Link>
                      <error id="alert"></error>
                      <button className="buttonget postbutton-1" id="postprojects-css-button">Next</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </form>
      </div>
      <div className="rangs-steps" id="rangs-steps">
        <p>Step 4 of 7</p>
        <meter type="Range" className="range-meter" name="Range" min="0" max="100" value="40" required ></meter>
      </div>
      <hr className="postprojects1-hr"/>
      <div className="spanBussiness-rangs-steps">
        <p>
          <span>@2023 Pangaea x All Rights Reserved</span>
        </p>
        <p className="p">Terms of Business</p>
      </div>
    </div>
    </div>
    </div>
  );
};

export default Postproject4;