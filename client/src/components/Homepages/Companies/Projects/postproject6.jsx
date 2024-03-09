import React, { useState, useEffect} from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import Header from "../Projects/Headerpage";

const Postproject6 = () => {
  const navigate = useNavigate();
  const [message, setMessage] = useState(null);

  useEffect(() => {
  }, []);

  const handleSubmit = async (event) => {
    event.preventDefault();

   let Projects = {
      type: document.getElementById("type").value,
      Type: document.getElementById("Type").value,
      skills4: event.target.skills4.value,

    };

    try {
      const response = await axios.post(
        "http://localhost:8000/api/postproject6",
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
          navigate("/postproject7");
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
    <div className="postprojects1-css" id="postprojects1-css">
    <div className="postprojects-css-1">
        <form
          action="/postproject6"
          method="POST"
          id="lable"
          onSubmit={handleSubmit}
        >
          <div className="postprojects-css-2">
            <h1 className="container-1">When do you need the project completed?</h1>
            <br />
            <p className="yourproject">
            <span>Tell us about the timeframe and budget for the project.</span>
            </p>
            <h2 className="yourproject-1">Expected timeframe</h2>
            <input type="text" name="type" id="type" className="postprojects-css-input" placeholder="No.of days" autofocus="" required />
            <h2 className="yourproject-1">Budget</h2>
            <input type="text" name="Type" id="Type" className="postprojects-css-input" placeholder="$000" autofocus="" required />
            <h2 className="yourproject-1">Service provider type</h2>
            <div className="postprojects-option">
              <div className="postprojects-option-1" id="postData">
                <div className="postprojects-option-2">
                  <select
                    id="postData"
                    className="postprojects-option-select" 
                    name="skills4"
                  >
                    <option value="">select option</option>
                    <option>Freelancer</option>
                    <option>Team</option>
                    <option>Both</option>
                  </select>
                </div>
                </div>
                </div>
                </div>
                <div className="form-group">
                  <div className="postprojects1-css-button">
                  <p>{message && <span className="postprojectssuccess-message">{message}</span>}</p>
                  </div>
                </div>
                <div className="form-group ">
                  <div className="postprojects1-css-button">
                    <Link to="/postproject5"><button className="buttonget postprojects1-button">Back</button></Link>
                    <error id="alert "></error>
                    <button className="buttonget postprojects1-button-4">Next</button>                                        
              </div>
              </div>
              </form>
      </div>
      <div className="rangs-steps" id="rangs-steps">
        <p>Step 6 of 7</p>
        <meter type="Range" className="range-meter" name="Range" min="0" max="100" value="80" required ></meter>
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

export default Postproject6;