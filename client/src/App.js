import { Routes, Route } from "react-router-dom";
//import { useState } from "react"; // Import useState
import Headerpage from "./components/Homepages/Homepage/Homepage";
//import StudentsHome from "./components/Homepages/Companies/StudentsHomePage";
import Aboutus from "./components/Homepages/Aboutus/Aboutus";
import Companies from "./components/Homepages/Companies/Companies";
import Students from "./components/Homepages/Students/Students";
import DataSciences from "./components/Homepages/Students/Learnmore/Data-Science-AI-ML-DL";
import CyberSecurity from "./components/Homepages/Students/Learnmore/Digital-Marketing-Cyber-Security";
import Purchase from "./components/Homepages/Students/Purchase/Purchase";
import Brilliant from "./components/Homepages/Register-Compaines/Register";
import Transformation from "./components/Homepages/Login-Compaines/Login";
import Homepagespostprojects from "./components/Homepages/Companies/Projects/Homepagepostprojects";
import InternetofThings from "./components/Homepages/Companies/Learnmore/Internet-of-things";
import EmbeddedSystems from "./components/Homepages/Companies/Learnmore/Embedded-Systems";
import DataScience from "./components/Homepages/Companies/Learnmore/Data-Science-AI-ML-DL";
import DigitalMarketing from "./components/Homepages/Companies/Learnmore/Digital-Marketing-Cyber-Security";
import Robotics from "./components/Homepages/Companies/Learnmore/Robotics-Drones- AI";
import FullstackDevelopment from "./components/Homepages/Companies/Learnmore/Full-stack-Development";
import Postproject1 from "./components/Homepages/Companies/Projects/postproject1";
import Postproject2 from "./components/Homepages/Companies/Projects/postproject2";
import Postproject3 from "./components/Homepages/Companies/Projects/postproject3";
import Postproject4 from "./components/Homepages/Companies/Projects/postproject4";
import Postproject5 from "./components/Homepages/Companies/Projects/postproject5";
import Postproject6 from "./components/Homepages/Companies/Projects/postproject6";
import Postproject7 from "./components/Homepages/Companies/Projects/postproject7";
import PostprojectsUploads from "./components/Homepages/Companies/Projects/postprojectsuploads";
// import Loginhomepage from "./home/loginhomepage";
import Signup from "./Register/Register";
import Sigin from "./Login/Login";
import ForgotPassword from "./Forgot-Password/Forgot-Password";
import ResetPassword from "./Reset-Password/Reset-Password";
import Topbar from "./scenes/global/Topbar";
import NotificationComponent from "./scenes/global/notification/notification";
import Userprofile from "./scenes/global/userprofile/userprofile";
import Dashboard from "./scenes/dashboard";
import Sidebar from "./scenes/global/Sidebar";
import Learningpath from "./scenes/learningpath";
import Start from "./scenes/learningpath/start";
import Started from "./scenes/learningpath/Customizedpath";
import Courses from "./scenes/courses/courses";
import Projects from "./scenes/projects/projects";
//import Activeprojects from "./scenes/projects/activeprojects";
import Capstoneaimagic from "./scenes/capstoneaimagic/capstoneaimagic";
import Capstonestart from "./scenes/capstoneaimagic/capstonestart";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { ColorModeContext, useMode } from "./theme";

function App() {
    const [theme, colorMode] = useMode();

    return ( <
        ColorModeContext.Provider value = { colorMode } >
        <
        ThemeProvider theme = { theme } >
        <
        CssBaseline / >
        <
        div className = "app" >
        <
        Routes >
        <
        Route path = "/"
        element = { < Headerpage / > }
        /> <
        Route path = "/aboutus"
        element = { < Aboutus / > }
        /><
        Route path = "/companies"
        element = { < Companies / > }
        /><
        Route path = "/brilliant"
        element = { < Brilliant / > }
        /> <
        Route path = "/transformation"
        element = { < Transformation / > }
        /> <
        Route path = "/homepagespostprojects"
        element = { < Homepagespostprojects / > }
        />  <
        Route path = "/postproject1"
        element = { < Postproject1 / > }
        /> <
        Route path = "/postproject2"
        element = { < Postproject2 / > }
        /> <
        Route path = "/postproject3"
        element = { < Postproject3 / > }
        /> <
        Route path = "/postproject4"
        element = { < Postproject4 / > }
        /> <
        Route path = "/postproject5"
        element = { < Postproject5 / > }
        /> <
        Route path = "/postproject6"
        element = { < Postproject6 / > }
        /> <
        Route path = "/postproject7"
        element = { < Postproject7 / > }
        /> <
        Route path = "/publish"
        element = { < PostprojectsUploads / > }
        /> <
        Route path = "/internetofthings"
        element = { < InternetofThings / > }
        /> <
        Route path = "/embeddedsystems"
        element = { < EmbeddedSystems / > }
        /> <
        Route path = "/datascience"
        element = { < DataScience / > }
        /> <
        Route path = "/digitalmarketing"
        element = { < DigitalMarketing / > }
        /> <
        Route path = "/robotics"
        element = { < Robotics / > }
        /> <
        Route path = "/fullstackdevelopment"
        element = { < FullstackDevelopment / > }
        /> <
        Route path = "/students"
        element = { < Students / > }
        /> <
        Route path = "/datascience"
        element = { < DataSciences / > }
        /> <
        Route path = "/cybersecurity"
        element = { < CyberSecurity / > }
        /> <
        Route path = "/purchase"
        element = { < Purchase / > }
        /> <
        Route path = "/signup"
        element = { < Signup / > }
        /> <
        Route path = "/login"
        element = { < Sigin / > }
        /> <
        Route path = "/forgot-password"
        element = { < ForgotPassword / > }
        />  <
        Route path = "/reset-password"
        element = { < ResetPassword / > }
        /> <
        Route path = "/dashboard/*"
        element = { <
            >
            <
            Sidebar / >
            <
            main className = "content" >
            <
            Topbar / >
            <
            Routes >
            <
            Route index element = { < Dashboard / > }
            /> <
            Route path = "/notification"
            element = { < NotificationComponent / > }
            /> <
            Route path = "/userprofile"
            element = { < Userprofile / > }
            /> <
            Route path = "/learningpath"
            element = { < Learningpath / > }
            /> <
            Route path = "/learningpath/start"
            element = { < Start / > }
            /> <
            Route path = "/learningpath/started"
            element = { < Started / > }
            /> <
            Route path = "/courses"
            element = { < Courses / > }
            /> <
            Route path = "/projects"
            element = { < Projects / > }
            />  <
            Route path = "/capstoneaimagic"
            element = { < Capstoneaimagic / > }
            /> <
            Route path = "/capstoneaimagic/capstonestart"
            element = { < Capstonestart / > }
            />< /
            Routes > <
            /main> < / >
        }
        /> < /
        Routes > <
        /div> < /
        ThemeProvider > <
        /ColorModeContext.Provider>
    );
}

export default App;
