import { Box, IconButton, useTheme } from "@mui/material";
import { useContext,useState} from "react";
import { ColorModeContext} from "../../theme";
//import { ColorModeContext, tokens } from "../../theme";
//import InputBase from "@mui/material/InputBase";
import LightModeOutlinedIcon from "@mui/icons-material/LightModeOutlined";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import NotificationsOutlinedIcon from "@mui/icons-material/NotificationsOutlined";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
//import SearchIcon from "@mui/icons-material/Search";
import {Link} from "react-router-dom";
import './topbar.css';

const Topbar = () => {
  const theme = useTheme();
  //const colors = tokens(theme.palette.mode);
  const colorMode = useContext(ColorModeContext);
  const [showNotifications, setShowNotifications] = useState(false);
  const [showUserprofile, setshowUserprofile] = useState(false);



  const handleNotificationsClick = () => {
    // Toggle the state to show/hide notifications
    setShowNotifications(!showNotifications);
  };

  const handleUserprofileClick = () => {
    // Toggle the state to show/hide notifications
    setshowUserprofile(!showUserprofile);
  };

  return (
    <div className="topbardashboard">
    <Box display="flex" justifyContent="space-between" p={2}>
      {/* SEARCH BAR */}
      {/*<Box
        display="flex"
        backgroundColor={colors.primary[400]}
        borderRadius="3px"
      >
        <InputBase sx={{ ml: 2, flex: 1 }} placeholder="Search" />
        <IconButton type="button" sx={{ p: 1 }}>
          <SearchIcon />
        </IconButton>
  </Box>*/}

      {/* ICONS */}
      <div className="darknotification1">
      <Box display="flex">
        <IconButton onClick={colorMode.toggleColorMode}>
          {theme.palette.mode === "dark" ? (
            <DarkModeOutlinedIcon />
          ) : (
            <LightModeOutlinedIcon />
          )}
        </IconButton>
        <Link to="./notification" style={{ textDecoration: "none" }}>
        <IconButton onClick={handleNotificationsClick}>
          <NotificationsOutlinedIcon />
        </IconButton>
        </Link>
        <IconButton>
          <SettingsOutlinedIcon />
        </IconButton>
        <Link to="./userprofile" style={{ textDecoration: "none" }}>
        <IconButton onClick={handleUserprofileClick}>
          <PersonOutlinedIcon />
        </IconButton>
        </Link>
      </Box>
      </div>
    </Box>
    </div>
    
  );
};

export default Topbar;