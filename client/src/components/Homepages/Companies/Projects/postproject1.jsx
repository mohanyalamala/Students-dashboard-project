import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import Header from "./Headerpage";
import "./postprojects.css";
//import background from "./images/background.jpg";

const Postprojects1 = () => {
    const navigate = useNavigate();
    const [message, setMessage] = useState(null);

        const handleSubmit = async (event) => {
            event.preventDefault();
    
            // Replace with the actual form data
            const Projects = {
                title1: event.target.title1.value,
                textarea: event.target.textarea.value,
    
            };
    
            try {
                const response = await axios.post('http://localhost:8000/api/postproject1', Projects,{
                    withCredentials: true, 
                });
                console.log('Response:', response);
    
                if (response.data.status === 'Success') {
                    console.log('Postproject submitted successfully');
                    console.log('Updated User Data:', response.data.data);
                    setMessage("Project Successful");
                    setTimeout(() => {
                        setMessage(null);
                        navigate("/postproject2");
                    }, 2000);
                } else {
                    console.error('Postproject submission failed');
                }
            } catch (error) {
                console.error('An error occurred during Postproject submission', error);
                console.error('Error response:', error.response);

                if (error.response && error.response.status === 400 && error.response.data && error.response.data.message) {
                    setMessage(error.response.data.message);
                } else {
                    // Handle other errors
                    setMessage("An error occurred during form submission");
                }
            }
        };
    return (
        <div className="postprojects1-header postprojects1-headers">
        <Header />
        <div className="postprojects1-cssimagesflex">
       <div className="postprojects1-css">
            <div className="postprojects1-css-1">
                                <form action="/postproject1" method="POST" id="postDataForm" onSubmit={handleSubmit}>
                                    <div className="postprojects1-css-2">
                                        <h1 className="postprojects1-container">Let's post your project</h1>
                                        <p className="yourproject1-p"><span>Post your project in minutes. Contact skilled freelancers,view profiles,ratings,protfolios and chat with them.</span></p>
                                        <h2 className="yourproject1-h2">Give your project a title</h2>
                                        <div className="postprojects1-css-text">
                                            <error id="alert"></error>
                                            <input type="text" name="title1" id="name" className="postprojects1-css-input" placeholder="e.g.Build a custom report" autofocus="" required/>
                                            {/* <input type="text" value="" id="postDataTitle" name="title" className="form-control" placeholder="e.g.Build a custom report" autofocus="" required /> */}
                                        </div>
                                        <h2 className="yourproject1-h2">Tell us a little bit about your project</h2>
                                        </div>
                                        <div className="postprojects1-css-text">
                                            <error id="alert"></error>
                                            <textarea rows="7" cols="20" className="postprojects1-css-textarea" id="postDataDescription" name="textarea" placeholder="Tell us in two to threensentences what the aim of your project and what you'd like to achieve. Provide as much details as possible and clearly state your expectations"
                                                autofocus="" required></textarea>
                                    </div>
                                    <div className="form-group">
                                    <div className="postprojects1-css-button">
                                    <p>{message && <span className="postprojectssuccess-message">{message}</span>}</p>
                                    </div>
                                    </div>
                                    <div className="form-group">
                                        <div className="postprojects1-css-button">
                                        <Link to="/transformation"><button className="buttonget postprojects1-button">Back</button></Link>
                                                <error id="alert "></error>
                                                <button className="buttonget postprojects1-button-4">Next</button>                                        
                                        </div>
                                    </div>
                                </form>
                            </div>
                <div className="postprojects1-rangs-steps-1">
                    <p>Step 1 of 7</p>
                    <meter className="postprojects1-range-meter" type="Range" name="Range" min="0" max="100" value="10" required></meter>
                </div>
                <hr className="postprojects1-hr"/>
                <div className="postprojects1-rangs-steps-2">
                    <p><span>@2023 Pangaea x All Rights Reserved</span></p>
                    <p className="p">Terms of Bussiness</p>
                </div>
                </div>
                {/* <li><img className="postprojects1-cssimages" src={background} alt=""/></li> */}
                </div>
                </div>

    )
}

export default Postprojects1;