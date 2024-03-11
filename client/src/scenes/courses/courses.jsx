import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Dashboardheader from '../../components/dashboardheader';
import './courses.css';
import Active from './active';
import Favorite from './favorite';
import Launched from './launched';

const Courses = () => {
    const [activeLink, setActiveLink] = useState(null);
    const [favoriteLink, setfavoriteLink] = useState(null);
    const [LaunchedLink, setlaunchedLink] = useState(null);


    const handleLinkClick = (linkName) => {
        setActiveLink(linkName);
        setfavoriteLink(linkName);
        setlaunchedLink(linkName);
    };

    return (
        <div>
            <Dashboardheader />
        <div className='courses'>
            <Link
                /*to="/my-active-courses"*/
                className={activeLink === 'active' ? 'active-link' : 'active-link'}
                onClick={() => handleLinkClick('active')}
            >
                <h1 className='active'>My Active Courses</h1>
            </Link>
            <Link
                //to="/my-favorite-courses"
                className={favoriteLink === 'favorite' ? 'favorite-link' : 'favorite-link'}
                onClick={() => handleLinkClick('favorite')}
            >
                <h1 className='favorite'>Completed Courses</h1>
            </Link>
            <Link
                //to="/my-newlylaunched-course"
                className={LaunchedLink === 'launched' ? 'launched-link' : 'launched-link'}
                onClick={() => handleLinkClick('launched')}
            >
                <h1 className='launched'>Newly Launched Courses</h1>
            </Link>
            </div>
            <hr />
        <div>
        <p className='myactive'>{activeLink === 'active' && <Active />}</p>
        <p className='myfavorite'>{favoriteLink === 'favorite' && <Favorite />}</p>
        <p className='mylaunched'>{LaunchedLink === 'launched' && <Launched />}</p>
        </div>
        </div>
    );
};

export default Courses;
