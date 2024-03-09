import { useState } from "react";
import { Sidebar,Menu, MenuItem } from "react-pro-sidebar";
import { Box, IconButton, Typography, useTheme } from "@mui/material";
import { Link} from "react-router-dom";
//import axios from 'axios';
//import "react-pro-sidebar/dist/css/sidebar.css";
//import 'react-pro-sidebar/dist/css/styles.css';
import { tokens } from "../../theme";
import DashboardIcon from "@mui/icons-material/Dashboard";
//import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import SchoolOutlinedIcon from "@mui/icons-material/SchoolOutlined";
//import BookOutlinedIcon from "@mui/icons-material/BookOutlined";
import LibraryBooksIcon from "@mui/icons-material/LibraryBooks";
//import CodeOutlinedIcon from "@mui/icons-material/CodeOutlined";
import AssignmentTurnedInIcon from "@mui/icons-material/AssignmentTurnedIn";
import CalendarTodayOutlinedIcon from "@mui/icons-material/CalendarTodayOutlined";
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";
import ExitToAppOutlinedIcon from "@mui/icons-material/ExitToAppOutlined";
import './sidebar.css';
//import { blue } from "@mui/material/colors";

const Item = ({ title, to, icon, selected, setSelected, handleLogout}) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  const [titleClicked, setTitleClicked] = useState(false);

  const handleTitleClick = () => {
    if (title === "LogOut") {
      handleLogout(); // Call the handleLogout function
    } else {
    setTitleClicked(!titleClicked);
    setSelected(title);
    }
  };

  const isLogout = title === "LogOut"; // Check if the item is "LogOut"

  //const isProjects = title === "title";

  return (
    <MenuItem
      className={`custom-menu-item ${titleClicked && selected === title ? "title-clicked" : ""} ${isLogout ? "logout-item" : ""}`}
      active={selected === title}
      style={{
        //color: colors.grey[100],
        fontWeight: 900,
        color: selected === title ? "#0000FF" : colors.grey[100],
        backgroundColor: selected === title ? "rgb(27, 182, 234)" : "transparent",
      }}
      onClick={() => { 
        if (title !== "LogOut") {
        setSelected(title);
        setTitleClicked(!titleClicked);
        }
      }}
      icon={icon}
      >
      {/*<Typography>{title}</Typography>
      <Link to={to} />
    </MenuItem>*/}
    <Typography>
    {title === "LogOut" ? (
          // Render a simple button for logout
          <Link to="/" onClick={handleLogout} className="logout-button">
            Log Out
          </Link>
        ) : (
          // Render the link for other menu items
          <Link to={to} className="titledashboards" onClick={handleTitleClick}>
            {title}
          </Link>
        )}
    {/*<Link to={to} className="title" onClick={handleTitleClick}>{title}</Link>*/}
    </Typography>
  </MenuItem>
  );
};

const SidebarComponent = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [selected, setSelected] = useState("Dashboard");

  const handleLogout = async () => {
    try {
      // Send a request to your backend to logout
      const response = await fetch('/logout', {
        method: 'GET',
        credentials: 'include', // Include credentials for cookie
      });

      if (response.ok) {
        // Logout successful, update the state or redirect as needed
        console.log('Logout successful');

        //window.location.href = '/';
      } else {
        console.error('Logout failed');
      }
    } catch (error) {
      console.error('Error during logout:', error);
    }
  };

  return (
    <div className="sidebar sidebar-scroling">
    <Box
      sx={{
        "& .pro-sidebar-inner": {
          background: `${colors.primary[400]} !important`,
        },
        "& .pro-icon-wrapper": {
          backgroundColor: "transparent !important",
        },
        "& .pro-inner-item": {
          padding: "5px 35px 5px 20px !important",
        },
        "& .pro-inner-item:hover": {
          color: "#868dfb !important",
        },
        "& .pro-menu-item.active": {
          color: "#6870fa !important",
        },
      }}
    >
      <Sidebar collapsed={isCollapsed}>
        <Menu iconShape="square" className="sidebar">
          <MenuItem
            onClick={() => setIsCollapsed(!isCollapsed)}
            className="menu-item"
            icon={isCollapsed ? <MenuOutlinedIcon /> : undefined}
            style={{
              margin: "10px 0 20px 0",
              color: colors.grey[100],
              transition: "background-color 0.3s",  // Add a smooth transition for the background color change
            }}
 
          >
            {!isCollapsed && (
              <Box
                display="flex"
                justifyContent="space-between"
                alignItems="center"
                ml="15px"
              >
                <Typography variant="h3" color={colors.grey[100]} >
                  
                </Typography>
                <IconButton onClick={() => setIsCollapsed(!isCollapsed)}>
                  <MenuOutlinedIcon />
                </IconButton>
              </Box>
            )}
          </MenuItem>
          <Box paddingLeft={isCollapsed ? undefined : "0px"}>
            <Item
              className="dashboard"
              title="Dashboard"
              to="/dashboard"
              icon={<DashboardIcon className="icon-margin"/>}
              selected={selected}
              setSelected={setSelected}
            />
            <Item
              title="Learning Path"
              to="./learningpath"
              icon={<SchoolOutlinedIcon className="icon-margin"/>}
              selected={selected}
              setSelected={setSelected}
            />
            <Item
              title="Courses"
              to="./courses"
              icon={<LibraryBooksIcon  className="icon-margin"/>}
              selected={selected}
              setSelected={setSelected}
            />
            <Item
              title="Projects"
              to="./projects"
              icon={<AssignmentTurnedInIcon className="icon-margin"/>}
              selected={selected}
              setSelected={setSelected}
            />
            <Item
              title="Capstone AI Magic"
              to="./capstoneaimagic"
              icon={<MenuOutlinedIcon className="icon-margin"/>}
              selected={selected}
              setSelected={setSelected}
            />
            <Item
              title="Live Sessions"
              to="./livesessions"
              icon={<CalendarTodayOutlinedIcon className="icon-margin"/>}
              selected={selected}
              setSelected={setSelected}
            />
            <Item
              title="LogOut"
              to="/"
              icon={<ExitToAppOutlinedIcon className="icon-margin "/>}
              selected={selected}
              setSelected={setSelected}
              handleLogout={handleLogout}
             
            />
          </Box>
        </Menu>
        </Sidebar>
      
    </Box>
    </div>
  );
};

export default SidebarComponent;