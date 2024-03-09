import React from "react";
import {Link} from "react-router-dom";
import Congratulations from "./images/congratulations.png";
import Header from "../Projects/Headerpage";

const PostprojectsUploads = () => {
    return (
    <div className="postprojects1-header postprojects1-headers">
    <Header />
    <div className="postprojects1-cssimagesflex">
    <div className="postprojects1-css publish" >
    <div className="postprojects-css-1">
            <img className="huebitsimg" src={Congratulations} alt=""/>
            <h1>Congratulations!</h1>
            <h1>Your project is now live</h1>
            <p className="p">You should start receiving bids from freelancers soon.</p>
            <p>What would you like to do next?</p>
            <form action="/publish" method="POST">
            <Link className="back" to="/postproject1">
            Post A Project
                </Link>
            </form>
            <p>VIEW MY DASHBOARD</p>
            <br /><br /><br /><br />
            <hr className="postprojects1-hr"/>
            <div className="span">
                <p><span>@2023 Pangaea x All Rights Reserved</span></p>
                <p className="p">Terms of Bussiness</p>
            </div>
        </div>
        </div>
        </div>
        </div>
    )
}


export default PostprojectsUploads;