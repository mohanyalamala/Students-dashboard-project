// import React from "react";
// import "./homelogin.css";
// import {Link} from "react-router-dom";


// function Model({setOpenModel}) {

//     return (
//         <div className="modalBackground">
//             <div className="modalContainer">
//                 <div className="titleCloseBtn">
//                     <button onClick={() => {
//                         setOpenModel(false);
//                     }} >x</button>
//                 </div>
//                 <div className="title">
//                 <Link to="/login">
//                 <button className="buttonget buttongetspopup-1">Students Sign In</button>
//             </Link>
//             </div>
//             <div className="title">
//             <Link to="/transformation">
//                 <button className="buttonget buttongetspopup">Companies Sign In</button>
//             </Link>
//             </div>
//             <div className="footer">
//                 <button onClick={() => {
//                     setOpenModel(false);
//                 }}
//                 id="cancelBtn" >
//                     Cancel
//                 </button>
//                 <button>Continue</button>
//             </div>
//                 </div>
//             </div>
//     )
// }

// export default Model;



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