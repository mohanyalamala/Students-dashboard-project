import React, { useState } from "react";
import { Link } from "react-router-dom";
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";
import LoginPopup from "../home/loginhomepage"; // Import the LoginPopup component
import "./Header.css";

const Pages = () => {
  const [menuActive, setMenuActive] = useState(false);
  // const [loginPopupOpen, setLoginPopupOpen] = useState(false);
  const [openModel, setOpenModel] = useState(false);


  const toggleMenu = () => {
    //setMenuActive(!menuActive);
    console.log("Toggle menu clicked");
    setMenuActive(!menuActive);
  };

  // const openLoginPopup = () => {
  //   setLoginPopupOpen(true);
  // };

  // const closeLoginPopup = () => {
  //   setLoginPopupOpen(false);
  // };

  return (
    <div className="hubits-div">
      <h1 className="hubitsp">HUE<span className="bits1">Bits</span></h1>
      <div className="hubits1">
        <div className="responsive-menu" onClick={toggleMenu}>
          <MenuOutlinedIcon className="menu-icon" />
        </div>
        <div className="hubitsp-1">
          <ul className={`hubits ${menuActive ? 'active' : ''}`} id="huebits">
            <li className="aboutus"><Link to='/Aboutus' className="aboutuses">Aboutus</Link></li>
            <li className="companies"><Link to='/companies'>Companies</Link></li>
            <li className="students"><Link to='/students'>Students</Link></li>
            {/* <li className=""><Link onClick={openLoginPopup}>Sign in</Link></li> */}
            <li className=""><Link onClick={() => setOpenModel(true)}>Sign In</Link></li>
            {openModel && <LoginPopup setOpenModel={setOpenModel} />}
          </ul>
        </div>
      </div>

      {/* Render the LoginPopup component if loginPopupOpen is true */}
      {/* {loginPopupOpen && <LoginPopup onClose={closeLoginPopup} />} */}
    </div>
  );
};

export default Pages;









// import React, { useState } from "react";
// import {Link} from "react-router-dom";
// import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";
// import "./Header.css";

// const Pages = () => {
//     const [menuActive, setMenuActive] = useState(false);

//     const toggleMenu = () => {
//         setMenuActive(!menuActive);
//     };
    
//     return (
//         <div className="hubits-div">
//             <h1 className="hubitsp">HUE<span className="bits1">Bits</span></h1>
//         <div className="hubits1">
//         <div className="responsive-menu" onClick={toggleMenu}>
//         <MenuOutlinedIcon className="menu-icon"/>
//         </div>
//         <div className="hubitsp-1">
//             <ul className={`hubits ${menuActive ? 'active' : ''}`} id="huebits">
//                 <li className="aboutus"><Link to='/Aboutus' className="aboutuses">Aboutus</Link></li>
//                 <li className="companies"><Link to='/companies'>Companies</Link></li>
//                <li className="students"><Link to='/Students'>Students</Link></li>
//                 <li><Link to='/loginhomepage'>Sign in</Link></li>
//             </ul>
//         </div>
//         </div>
//     </div>
//     );
// }

// export default Pages;
