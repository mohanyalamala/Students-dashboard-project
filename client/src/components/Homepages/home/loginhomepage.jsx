import React from "react";
import {Link} from "react-router-dom";
import { Close as CloseIcon } from "@mui/icons-material";
// import Students from "../images/popup/2.png";
import "./homelogin.css";


function Model({setOpenModel}) {

    return (
            // <div className="modalBackground">
            // <div className="titleCloseBtn">
            //     <CloseIcon className="closemodal" onClick={() => {
            //             setOpenModel(false);
            //         }}  />
            // </div>
            //     <Link to="/login" className="title1">
            //     {/* <img src={Students} alt="Students" /> */}
            //     <button className="buttongetspopup-1">Students Sign In</button>
            // </Link>
            // <Link to="/transformation" className="title">
            //     <button className="buttonget buttongetspopup">Companies Sign In</button>
            // </Link>
            // </div>
        <div className="modalBackground">
            <div className="titleCloseBtn">
                <CloseIcon className="closemodal" onClick={() => {
                   setOpenModel(false);
                    }}  />
            </div>
            <div className="learncenter">
        <video className="background-video" autoPlay loop muted playsInline>
            <source
                src={require("../images/HUEBITS(1).mp4")}
                type="video/mp4"
            />
            Your browser does not support the video tag.
        </video>
        <div className="video-overlaypapupflex">
            <Link to="/login">
                <button className="video-overlaypapups-1">
                Students Sign In 
                </button>
            </Link>
            <Link to="/transformation">
                <button className="video-overlaypapup-1">
                Companies Sign In
                </button>
            </Link>
            </div>
            </div>
            </div>
    )
}

export default Model;








// import React from "react";
// import {Link} from "react-router-dom";
// import Headerpage from "../components/Homepages/Headerpage/Headerpage";


// const LoginHomepage = () => {
//     return (
//     <div className="students-flex companies-flex">
//         <Headerpage />
//       <Link to="/login"><button className="buttonget">
//         Students Sign In
//         </button></Link>
//         <Link to="/transformation"><button className="buttonget">Compaines Sign In
//         </button></Link>
//     </div>
       
//     )
// }

// export default LoginHomepage;



// import React, { useState } from "react";
// import { Link } from "react-router-dom";
// import "./homelogin.css";

// const LoginHomepage = () => {
//     const [showModal, setShowModal] = useState(false);

//     const openModal = () => {
//         setShowModal(true);
//     };

//     const closeModal = () => {
//         setShowModal(true);
//     };

//     return (
//         <div className="popuplogin">
             
//             <Link onClick={openModal}>
//             </Link>
//             <div className="buttongetspopups">
//             <Link to="/login">
//                 <button className="buttonget buttongetspopup-1">Students Sign In</button>
//             </Link>
//             <Link to="/transformation">
//                 <button className="buttonget buttongetspopup">Companies Sign In</button>
//             </Link>
//             </div>
//             {showModal && (
//                 <div className="modal" onClick={closeModal}>
//                     <div className="modal-content" onClick={(e) => e.stopPropagation()}>
//                         {/* Your Sign In Form or Content Goes Here */}
//                         <h2>Sign In</h2>
//                         {/* Add your sign-in form or any other content here */}
//                         <button className="closemodel" onClick={closeModal}>Close Modal</button>
//                     </div>
//                 </div>
//             )}
           
//         </div>
//     );
// };

// export default LoginHomepage;


// import React, { useState } from "react";
// import Model from "./Model";

// function ParentComponent() {
//   const [openModel, setOpenModel] = useState(false);

//   return (
//     <div>
//       <button onClick={() => setOpenModel(true)}>Open Model</button>
//       {openModel && <Model setOpenModel={setOpenModel} />}
//     </div>
//   );
// }

// export default ParentComponent;




