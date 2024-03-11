import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Dashboardheader from '../../components/dashboardheader';
import './projects.css';
import Activeprojects from './activeprojects';
import Favoriteprojects from './favoriteprojects';
import Launchedprojects from './launchedprojects';

const Projects = () => {
    const [activeprojectsLink, setActiveprojectsLink] = useState(null);
    const [favoriteprojectsLink, setFavoriteprojectsLink] = useState(null);
    const [launchedprojectsLink, setLaunchedprojectsLink] = useState(null);


    const handleLinkClick = (linkName) => {
        setActiveprojectsLink(linkName);
        setFavoriteprojectsLink(linkName);        
        setLaunchedprojectsLink(linkName);

    };

    return (
        <div>
            <Dashboardheader />
        <div className='projects'>
            <Link
                //to="/my-active-projects"
                className={activeprojectsLink === 'activeprojects' ? 'activeprojects-link' : 'activeprojects-link'}
                onClick={() => handleLinkClick('activeprojects')}
            >
                <h1 className='activeprojects'>My Active Projects</h1>
            </Link>
            <Link
                //to="/my-favorite-projects"
                className={favoriteprojectsLink === 'favoriteprojects' ? 'favoriteprojects-link' : 'favoriteprojects-link'}
                onClick={() => handleLinkClick('favoriteprojects')}
            >
                <h1 className='favoriteprojects'>Completed Projects</h1>
            </Link>
            <Link
                //to="/my-newlylaunched-projects"
                className={launchedprojectsLink === 'launchedprojects' ? 'launchedprojects-link' : 'launchedprojects-link'}
                onClick={() => handleLinkClick('launchedprojects')}
            >
                <h1 className='launchedprojects'>Newly Launched Projects</h1>
            </Link>
        </div>
        <hr />
        <div>
        <p className='myactiveprojects'>{activeprojectsLink === 'activeprojects' && <Activeprojects />}</p>
        <p className='myfavoriteprojects'>{favoriteprojectsLink === 'favoriteprojects' && <Favoriteprojects />}</p>
        <p className='mylaunchedprojects'>{launchedprojectsLink === 'launchedprojects' && <Launchedprojects />}</p>
        </div>
        </div>
    );
};

export default Projects;
