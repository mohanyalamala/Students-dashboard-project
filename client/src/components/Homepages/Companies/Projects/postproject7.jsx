import React, { useState} from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import Header from "../Projects/Headerpage";

const Postproject7 = () => {
  const navigate = useNavigate();
  const [message, setMessage] = useState(null);

  const handleSubmit = async (event) => {
    event.preventDefault();

    // Create a new FormData object to handle file upload
    const formData = new FormData(event.target);
    // Display the confirmation modal
    showModal("You are now committing to these project details. Please confirm.", async () => {
      try {
        const response = await axios.post(
          "http://localhost:8000/api/postproject7",
          formData,
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
            navigate("/publish");
          }, 2000);
        } else {
          console.error("Postproject submission failed");
        }
      } catch (error) {
        console.error("An error occurred during Postproject submission", error);
        console.error("Error response:", error.response);
      }
    });
  };

  const showModal = (message, onConfirm) => {
   
    const isConfirmed = window.confirm(message);

    if (isConfirmed) {
      onConfirm();
    }
  };

  return (
    <div className="postprojects1-header postprojects1-headers">
    <Header />
    <div className="postprojects1-cssimagesflex">
    <div className="postprojects1-css" >
    <div className="postprojects-css-1">
        <form
          action="/postproject7"
          method="POST"
          id="postForm"
          onSubmit={handleSubmit}
        >
          <div className="postprojects-css-2">
            <div>
              <h1 className="container-1">Upload File</h1>
              <label htmlFor="fileInput" className="yourproject">Upload File related to project</label>
              <label className="yourproject">Types Allowed: .xlsx, .xls, .doc, .docx, .ppt, .pptx, and .pdf.</label><br />
              <input
                type="file"
                id="fileInput"
                name="fileInput"
                className="postprojects-css-input"
                accept=".doc, .pdf"
                placeholder="File Types Allowed: .xlsx, .xls, .doc, .docx, .ppt, .pptx, and .pdf"
                autoFocus
                required
              />
              <br /><br />
              <h4 className="yourproject-1">Upload Attachments (Max 20Mb)</h4>
            </div>
            <div className="form-group">
              <div className="postprojects1-css-button">
              <p>{message && <span className="postprojectssuccess-message">{message}</span>}</p>
              </div>
            </div>
            <div className="form-group ">
                  <div className="postprojects1-css-button">
                    <Link to="/postproject6"><button className="buttonget postprojects1-button">Back</button></Link>
                    <error id="alert "></error>
                    <button className="buttonget postprojects1-button-4">PUBLISH</button>                                        
              </div>
              </div>
              </div>
        </form>
      </div>
      <br />
      <div className="rangs-steps">
        <p>Step 7 of 7</p>
        <meter type="Range" className="range-meter" name="Range" min="0" max="100" value="95" required ></meter>
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

export default Postproject7;