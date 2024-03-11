import React from "react";
import Dashboardheader from "../../components/dashboardheader";
import Learningpathprogress from '../../components/Learningpathprogress';
import CoursesProgress from "../../components/Coursesprogress";
import ProjectsProgress from "../../components/ProjectsProgress";
import HOEScore from "../../components/HOEScore";
import './dashboardindex.css';

const Dashboard = () => {

  return (
    <div className="Dashboardheader1">
      <Dashboardheader />
      <div className="dashboardheader2">
  <div className="Learningpathprogess">
        <Learningpathprogress />
        <CoursesProgress />
  </div>
      <div className="ProjectsProgres">
        <ProjectsProgress />
        <HOEScore />
      </div>
    </div>
    </div>
  );
}

export default Dashboard;
