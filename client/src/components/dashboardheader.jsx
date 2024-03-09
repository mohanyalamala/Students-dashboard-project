import React, { useState, useEffect }  from "react";
import './dashboardheader.css';

const Dashboardheader = () => {
  const [username, setUsername] = useState("");

  useEffect(() => {
    fetch('/dashboard', { method: 'GET', credentials: 'include' })
      .then(response => {
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        //return response.json();
        return response.text(); 

      })
      .then(data => {
        console.log('Data received from server:', data);
        const jsonData = JSON.parse(data)
        setUsername(jsonData.username);
      })
      .catch(error => console.error('Error fetching user data:', error));
  }, []);
  
  return (
  <div className="dashboard">
    <div className="dashboard1">
    <img src="/profile.png" className="profile" style={{width:"80px",height:"80px",marginTop:"10px"}} alt="" />
    <span className="name">Welcome {username} Keep Going
    <span className="name1">You are close to realizing your dreams.</span>
    </span>
    </div>
  </div>
  )
}

export default Dashboardheader;