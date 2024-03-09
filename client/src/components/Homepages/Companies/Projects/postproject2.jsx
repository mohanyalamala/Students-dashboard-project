import React,{useState,useEffect,useRef } from "react";
import { Link,useNavigate } from "react-router-dom";
import axios from "axios";
import Header from "./Headerpage";
import ReactDOM from "react-dom";

import "./Postproject.css";

const Postproject2 = () => {
    const navigate = useNavigate();
    const [message, setMessage] = useState(null);
    const selectedSkills1Array = [];
    const postDataSelectRef = useRef(null);
    const selectedSkills1InputRef = useRef(null);

    const handlePostDataClick = (event) => {
        if (event.target.tagName === 'DIV') {
            const selectedSkills1 = event.target.textContent.trim();
            if (!selectedSkills1Array.includes(selectedSkills1)) {
                selectedSkills1Array.push(selectedSkills1);
                updateSelectedSkills1();
            }
        }
    };

    useEffect(() => {
        const postDataSelect = postDataSelectRef.current;
        if (postDataSelect) {
        postDataSelect.addEventListener('click', handlePostDataClick);

        return () => {
            postDataSelect.removeEventListener('click', handlePostDataClick);
        };
    }
    }, [postDataSelectRef.current]); // Make sure to pass an empty dependency array to run this effect only once

    const updateSelectedSkills1 = () => {
        selectedSkills1InputRef.current.value = selectedSkills1Array.slice(0, 9).join(', ');
    };
  
  const handleSubmit = async (event) => {
    event.preventDefault();

    const Projects = {
        skills: event.target.skills.value,

    };

    try {
        const response = await axios.post('http://localhost:8000/api/postproject2', Projects,{
            withCredentials: true, 
        });
        console.log('Response:', response);

        if (response.data.status === 'Success') {
            console.log('Postproject submitted successfully');
            console.log('Updated User Data:', response.data.data);
            setMessage("Project Successful");
            setTimeout(() => {
                setMessage(null);
                navigate("/postproject3");
            }, 2000);
        } else {
            console.error('Postproject submission failed');
        }
    } catch (error) {
        console.error('An error occurred during Postproject submission', error);
        console.error('Error response:', error.response);
    }
};
    return (
        <div className="postprojects-header postprojects1-headers">
        <Header />
        <div className="postprojects1-cssimagesflex">
        <div className="postprojects1-css" id="postprojects1-css">
        <div className="postprojects-css-1">
                <form action="/postproject2" method="POST" id="lable" onSubmit={handleSubmit}>
                    <div className="postprojects-css-2">
                        <h1 className="container-1">Which industry is this project for?</h1>
                        <p className="yourproject"><span>Select the right industry for the project so we can match you with the right freelancers.</span></p>
                            <div className="postprojectsoptionsdiv" id="postData" >
                            <div className="skills" ref={postDataSelectRef} onClick={handlePostDataClick}>Any +</div>
                            <div className="skills" ref={postDataSelectRef} onClick={handlePostDataClick}>Audit analytics +</div>
                            <div className="skills" ref={postDataSelectRef} onClick={handlePostDataClick}>Communications analytics +</div>
                            <div className="skills" ref={postDataSelectRef} onClick={handlePostDataClick}>Consulting analytics +</div>
                            <div className="skills" ref={postDataSelectRef} onClick={handlePostDataClick}>CPG Analytics +</div>
                            <div className="skills" ref={postDataSelectRef} onClick={handlePostDataClick}>Customer analytics +</div>
                            <div className="skills" ref={postDataSelectRef} onClick={handlePostDataClick}>Customer Service analytics +</div>
                            <div className="skills" ref={postDataSelectRef} onClick={handlePostDataClick}>Education analytics +</div>
                            <div className="skills" ref={postDataSelectRef} onClick={handlePostDataClick}>Energy + Utilities analytics +</div>
                            </div>
                                {/* <input type="text" className="postprojects-css-inputs" name="skills" id="selectedSkills1"
                                    placeholder="Select more skills (max of 9)" 
                                    autofocus="" required 
                                    ref={selectedSkills1InputRef}
                                    />
                                <button type="button" className="buttongets-1">button</button> */}
                            <textarea rows="7" cols="20" className="postprojects-css-inputs" id="postDataDescription" name="skills" placeholder="Select more skills (max of 9)"
                            autofocus="" required ref={selectedSkills1InputRef}></textarea>
                        </div>
                        <div className="form-group">
                            <div className="postprojects1-css-button">
                            <p>{message && <span className="postprojectssuccess-message">{message}</span>}</p>
                            </div>
                        </div>
                        <div className="form-group ">
                            <div className="postprojects-css-button">
                            <Link to="/postproject1"><button className="buttonget postbutton">Back</button></Link>
                            <error id="alert "></error>
                            <button className="buttonget postbutton-1 next-1">Next</button>                                            
                        </div>
                    </div>
                </form>
            </div>
            <div className="rangs-steps">
                <p>Step 2 of 7</p>
                <meter type="Range" className="range-meter" name="Range" min="0" max="100" value="20" required></meter>
            </div>
            <hr className="postprojects1-hr"/>
            <div className="spanBussiness-rangs-steps">
                <p><span>@2023 Pangaea x All Rights Reserved</span></p>
                <p className="p">Terms of Bussiness</p>
            </div>
            </div>
            </div>
            </div>
            
    )
}

export default Postproject2;








// import React,{useState,useEffect,useRef } from "react";
// import { Link,useNavigate } from "react-router-dom";
// import axios from "axios";
// import Header from "./Headerpage";

// import "./Postproject.css";

// const Postproject2 = () => {
//     const navigate = useNavigate();
//     const [message, setMessage] = useState(null);
//     const selectedSkills1Array = [];
//     const postDataSelectRef = useRef(null);
//     const selectedSkills1InputRef = useRef(null);

//     const handlePostDataClick = (event) => {
//         if (event.target.tagName === 'DIV') {
//             const selectedSkills1 = event.target.textContent.trim();
//             if (!selectedSkills1Array.includes(selectedSkills1)) {
//                 selectedSkills1Array.push(selectedSkills1);
//                 updateSelectedSkills1();
//             }
//         }
//     };

//     useEffect(() => {
//         const postDataSelect = postDataSelectRef.current;
//         if (postDataSelect) {
//         postDataSelect.addEventListener('click', handlePostDataClick);

//         return () => {
//             postDataSelect.removeEventListener('click', handlePostDataClick);
//         };
//     }
//     }, [postDataSelectRef.current]); // Make sure to pass an empty dependency array to run this effect only once

//     const updateSelectedSkills1 = () => {
//         selectedSkills1InputRef.current.value = selectedSkills1Array.slice(0, 9).join(', ');
//     };
  
//   const handleSubmit = async (event) => {
//     event.preventDefault();

//     const Projects = {
//         skills: event.target.skills.value,

//     };

//     try {
//         const response = await axios.post('http://localhost:8000/postproject2', Projects,{
//             withCredentials: true, 
//         });
//         console.log('Response:', response);

//         if (response.data.status === 'Success') {
//             console.log('Postproject submitted successfully');
//             console.log('Updated User Data:', response.data.data);
//             setMessage("Project Successful");
//             setTimeout(() => {
//                 setMessage(null);
//                 navigate("/postproject3");
//             }, 2000);
//         } else {
//             console.error('Postproject submission failed');
//         }
//     } catch (error) {
//         console.error('An error occurred during Postproject submission', error);
//         console.error('Error response:', error.response);
//     }
// };
//     return (
//         <div className="postprojects-header">
//         <Header />
//         <div className="postprojects-css">
//         <div className="postprojects-css-1">
//                 <form action="/postproject2" method="POST" id="lable" onSubmit={handleSubmit}>
//                     <div className="postprojects-css-2">
//                         <h1 className="container-1">Which industry is this project for?</h1>
//                         <p className="yourproject"><span>Select the right industry for the project so we can match you with the right freelancers.</span></p>
//                             <div className="postprojectsoptionsdiv" id="postData" ref={postDataSelectRef}>
//                             <div className="skills">Any +</div>
//                             <div className="skills">Audit analytics +</div>
//                             <div className="skills">Communications analytics +</div>
//                             <div className="skills">Consulting analytics +</div>
//                             <div className="skills">CPG Analytics +</div>
//                             <div className="skills">Customer analytics +</div>
//                             <div className="skills">Customer Service analytics +</div>
//                             <div className="skills">Education analytics +</div>
//                             <div className="skills">Energy + Utilities analytics +</div>
//                             </div>
//                                 {/* <input type="text" className="postprojects-css-inputs" name="skills" id="selectedSkills1"
//                                     placeholder="Select more skills (max of 9)" 
//                                     autofocus="" required 
//                                     ref={selectedSkills1InputRef}
//                                     />
//                                 <button type="button" className="buttongets-1">button</button> */}
//                             <textarea rows="7" cols="20" className="postprojects-css-inputs" id="postDataDescription" name="skills" placeholder="Select more skills (max of 9)"
//                             autofocus="" required ref={selectedSkills1InputRef}></textarea>
//                         </div>
//                         <div className="form-group ">
//                             <div className="postprojects-css-button">
//                             <Link to="/postproject1"><button className="buttonget postbutton">Back</button></Link>
//                             <error id="alert "></error>
//                             <p>{message && <span className="success-message">{message}</span>}</p>
//                             <button className="buttonget postbutton-1 next-1">Next</button>                                            
//                         </div>
//                     </div>
//                 </form>
//             </div>
//             <div className="rangs-steps">
//                 <p>Step 2 of 7</p>
//                 <meter type="Range" className="range-meter" name="Range" min="0" max="100" value="20" required></meter>
//             </div>
//             <hr />
//             <div className="spanBussiness-rangs-steps">
//                 <p><span>@2023 Pangaea x All Rights Reserved</span></p>
//                 <p className="p">Terms of Bussiness</p>
//             </div>
//             </div>
//             </div>
            
//     )
// }

// export default Postproject2;










{/* <div className="main" id="postData" ref={postDataSelectRef}>
                                <div className="any">
                                    <div id="any">Any +</div>
                                    <div id="audit">Audit analytics +</div>
                                </div>
                                <div className="communications">
                                    <div id="commu">Communications analytics +</div>
                                    <div id="cons">Consulting analytics +</div>
                                </div>
                                <div className="cpg">
                                    <div id="cpg">CPG Analytics +</div>
                                    <div id="cust">Customer analytics +</div>
                                </div>
                                <div className="customer">
                                    <div id="custo">Customer Service analytics +</div>
                                    <div id="educ">Education analytics +</div>
                                </div>
                                <div id="energy">Energy + Utilities analytics +</div>
                            </div>
                            <div className="postprojectssearch">
                                <input type="text" className="postprojects-css-input" name="skills" id="selectedSkills1"
                                    placeholder="Select more skills (max of 9)" 
                                    autofocus="" required 
                                    ref={selectedSkills1InputRef}
                                    />
                                <button type="button" className="buttongets-1">button</button>
                            </div>
                            </div> */}