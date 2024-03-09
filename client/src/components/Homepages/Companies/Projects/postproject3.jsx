import React, { useState, useEffect, useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import Header from "./Headerpage";


const Postproject3 = () => {
  const navigate = useNavigate();
  const [message, setMessage] = useState(null);
  const [selectedSkills2Array, setSelectedSkills2Array] = useState([]);
  const postDataSelectRef = useRef(null);
  const selectedSkills2InputRef = useRef(null);

  const handlePostDataClick = (event) => {
    if (event.target.tagName === "DIV") {
      const selectedSkills2 = event.target.textContent.trim();
      if (!selectedSkills2Array.includes(selectedSkills2)) {
        setSelectedSkills2Array([...selectedSkills2Array, selectedSkills2]);
        updateSelectedSkills2();
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
  }, [postDataSelectRef.current, selectedSkills2Array]);

  const updateSelectedSkills2 = () => {
    selectedSkills2InputRef.current.value = selectedSkills2Array
      .slice(0, 9)
      .join(", ");
  };

const handleAddSkill = () => {
    const selectedSkill = postDataSelectRef.current.value;
    if (selectedSkill) {
      if (!selectedSkills2Array.includes(selectedSkill)) {
        setSelectedSkills2Array([...selectedSkills2Array, selectedSkill]);
        updateSelectedSkills2();
      }
      postDataSelectRef.current.value = ""; // Clear the selected value in the dropdown
    }
  };

  const handleInputChange = (event) => {
    // This function will be called when the user edits the input field directly
    const inputSkills = event.target.value;
    const inputSkillsArray = inputSkills.split(",").map((skill) => skill.trim());
    setSelectedSkills2Array(inputSkillsArray.slice(0, 9));

  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    // const Projects = {
    //   skills2: selectedSkills2InputRef.current.value,
    // };
    const Projects = {
        //skills2: event.target.selectedSkills2InputRef.value,
        skills1: selectedSkills2InputRef.current.value


    };
    

    try {
      const response = await axios.post(
        "http://localhost:8000/api/postproject3",
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
          navigate("/postproject4");
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
          action="/postproject3"
          method="POST"
          id="lable"
          onSubmit={handleSubmit}
        >
          <div className="postprojects-css-2">
            <h1 className="container-1">What skills are you looking for in particular.</h1>
            <p className="yourproject">
            <span>Let's ensure that your project post attracts the talent with the
              right skillset.
            </span></p>
            <div className="postprojects-option">
              <div className="postprojects-option-1" id="postData">
                <div className="postprojects-option-2">
                  <select
                    id="postData"
                    className="postprojects-option-select"
                    ref={postDataSelectRef}
                  >
                    <option value="">select option</option>
                    <option>Academic Writing +</option>
                    <option>Advanced analytics +</option>
                    <option>Automation +</option>
                    <option>BI +</option>
                    <option>Big Data +</option>
                    <option>BigQuery +</option>
                    <option>Birst +</option>
                    <option>Business Intelligence +</option>
                    <option>Classification +</option>
                  </select>
                  <button type="button" onClick={handleAddSkill}>
                      Add Skill
                    </button>
                  <div className="search">
                    <input
                      type="text"
                      className="postprojects-css-input-1"
                      name="skills1"
                      id="selectedSkills2"
                      placeholder="Select more skills (max of 9)"
                      autoFocus=""
                      required
                      ref={selectedSkills2InputRef}
                      value={selectedSkills2Array.slice(0, 9).join(", ")}
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
                  <div className="postprojects-css-button-1">
                    <Link to="/postproject2">
                      <button className="buttonget postbutton">Back</button>
                    </Link>
                      <error id="alert"></error>
                      <button className="buttonget postbutton-1 " id="postprojects-css-button">Next</button>                  </div>
                </div>
              </div>
            </div>
          </div>
        </form>
      </div>
      <div className="rangs-steps">
        <p>Step 3 of 7</p>
        <meter type="Range" className="range-meter" name="Range" min="0" max="100" value="30" required ></meter>
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

export default Postproject3;