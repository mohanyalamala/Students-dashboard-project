import React,{useState} from "react";
import Dashboardheader from "../../components/dashboardheader";
import {Link} from 'react-router-dom';
import Data from "./data";
import Bigdata from "./bigdata";
import './Customized.css';

const Customized = () => {
        const [datascienceLink, setdatascienceLink] = useState(null);
        const [bigdataLink, setbigdataLink] = useState(null);


        const handleLinkClick = (linkName) => {
            setdatascienceLink(linkName);
            setbigdataLink(linkName);

        }
    return (
         <div className="customizedscroling">
        <Dashboardheader />
        <div className="databigdata1">
            <div className="databigdata">
            <Link
                //to="/my-active-projects"
                className={datascienceLink === 'datascience' ? 'datascienceLink-link' : 'datascienceLink-link'}
                onClick={() => handleLinkClick('datascience')}
            >
                <button className='datascience'>IOT</button>
            </Link>
            <Link
                //to="/my-active-projects"
                className={bigdataLink === 'bigdata' ? 'bigdataLink-link' : 'bigdataLink-link'}
                onClick={() => handleLinkClick('bigdata')}
            >
                <button className='bigdata'>Data Science</button>
            </Link>
            </div>
        <p className='customised1'>{datascienceLink === 'datascience' && <Data />}</p>
        <p className='customised1'>{bigdataLink === 'bigdata' && <Bigdata />}</p>
        </div>
        </div>
    )
}

export default Customized;