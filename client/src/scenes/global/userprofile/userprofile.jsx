import React, { useEffect, useState } from "react";
import axios from "axios";
import Dashboardheader from "../../../components/dashboardheader";

const Userprofile = () => {
  const [userData, setUserData] = useState([]);

  useEffect(() => {
    const displayUsernames = async () => {
      try {
        const response = await axios.post('http://localhost:8000/api/userprofile', {
          // Add any necessary parameters or request body here
        });

        if (response.data.success) {
          setUserData(response.data.data);
        } else {
          console.error('Error fetching user profile data:', response.data.message);
        }
      } catch (error) {
        console.error('Error fetching user profile data:', error.message);
      }
    };

    // Call the function to fetch user data
    displayUsernames();
  }, []);

  return (
    <div>
      <Dashboardheader />
      <h2>User Profile</h2>
      {/* Render user data as needed */}
      {userData.map(user => (
        <div key={user._id}>
          <h2>Username: {user.username}</h2>
          {/* Add more details as needed */}
        </div>
      ))}
    </div>
  );
};

export default Userprofile;








// import React, { useEffect, useState } from "react";
// import axios from "axios";
// import Dashboardheader from "../../../components/dashboardheader";

// const Userprofile = () => {
//   const [userData, setUserData] = useState(null);

//   useEffect(() => {
//     const fetchUserData = async () => {
//       try {
//         const response = await axios.post('http://localhost:8000/api/userprofile', {
//           token: localStorage.getItem('token'),
//         });

//         setUserData(response.data.userData);
//       } catch (error) {
//         console.error('Error fetching user profile data:', error);
//       }
//     };

//     fetchUserData(); // Corrected function call

//     const name = "";

//     setUserData({
//       name: name,
//       username: "",
//     });
//   }, []);

//   return (
//     <div>
//       <Dashboardheader />
//       <h2>User Profile</h2>
//       <p className='user-name'>User Name: {userData?.name}</p>
//       <p className='user-username'>Username: {userData?.username}</p>
//     </div>
//   );
// };

// export default Userprofile;