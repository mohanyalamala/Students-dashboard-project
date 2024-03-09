import React, { useState } from 'react';
import { Link } from "react-router-dom";
import axios from 'axios';
import "./data.css";

function App() {
    const [interestedCourse, setInterestedCourse] = useState('');
    const [recommendations, setRecommendations] = useState({});

    // Dictionary to map levels to links
    const courseLinks = {
        Beginner: {
            "keyword1": "https://youtu.be/_uQrJ0TkZlc?si=npaQe3B0O7lqxrHy/beginner-course-1",
            "keyword2": "https://www.youtube.com/watch?v=msEmUtYqVV0/beginner-course-2",
            // Add more links as needed
        },
        Medium: {
            "keyword1": "https://example.com/medium-course-1",
            // Add more links as needed
        },
        Advanced: {
            "keyword1": "https://example.com/advanced-course-1",
            // Add more links as needed
        },
    };
    const projectLinks = {
        Beginner: {
            "keyword1": "https://www.example.com/beginner-projects/project-1",
            // Add more links as needed
        },
        Medium: {
            "keyword1": "https://www.example.com/medium-projects/project-1",
            // Add more links as needed
        },
        Advanced: {
            "keyword1": "https://www.example.com/advanced-projects/project-1",
            // Add more links as needed
        },
};

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            // Make a POST request to the Flask backend
            const response = await axios.post('http://localhost:5000/api/data', { interested_course: interestedCourse });

            // Update recommendations state with the received data
            setRecommendations(response.data);
        } catch (error) {
            console.error('Error fetching recommendations:', error);
        }
    };

    return (
        <div className='interested-course'>
            <form onSubmit={handleSubmit} className='interested-course-form'>
                <label htmlFor="interested_course" className='interested-course-label'> You are Interested in __________? </label><br />
                <input
                    type="text"
                    id="interested_course"
                    name="interested_course"
                    className='interested-course-1'
                    value={interestedCourse}
                    onChange={(e) => setInterestedCourse(e.target.value)}
                /><br /> <br />
                <input type="submit" value="Submit" className='interested-course-submit' />
            </form>
            <div className='recommendations-container'>
                {Object.keys(recommendations).map((index) => (
                    <div key={index}>
                        <h2 className='recommendations-index'> Recommendations for {recommendations[index].level} </h2>
                        <div className='recommendations-index-flex'>
                        <div class="Wrapper-sc-fvyqwl-1 iZEyIQ1 AssignmentList__Timeline-sc-1t9paan-2 chIzFH">
           <ul className="Circle-sc-fvyqwls-1">
             <li>
               <div class="Circle-sc-fvyqwl-0 jNeOpF1">
                </div>
                 </li>
               <li>
                  <div class="Circle-sc-fvyqwl-0 lfeMSB1 lfem1">
                     </div>
                    </li>
                     <li>
                   <div class="Circle-sc-fvyqwl-0 lfeMSB1 lfem1">
                    </div>
                    </li>
                     <li>
                       <div class="Circle-sc-fvyqwl-0 lfeMSB1 lfems1">
                         </div>
                         </li>
                         <li>
                    <div class="Circle-sc-fvyqwl-0 lfeMSB1 lfembs1">
                      </div>
                   </li>
             </ul>
           </div> 
           <ul className='recommendations-ul'>
    {recommendations[index].courses && recommendations[index].courses.map((item, itemIndex) => (
        <li key={itemIndex} className='recommendations-li'>
            <Link to={courseLinks[recommendations[index].level]["keyword" + (itemIndex + 1)]} target="_blank" rel="noopener noreferrer">
                {itemIndex + 1}.{item}
            </Link>
        </li>
    ))}
</ul>
<ul className="recommendations-ul">
    {recommendations[index].projects && recommendations[index].projects.map((item, itemIndex) => (
        <li key={itemIndex} className='recommendations-li'>
            <Link to={projectLinks[recommendations[index].level]["keyword" + (itemIndex + 1)]} target="_blank" rel="noopener noreferrer">
                {itemIndex + 1}.{item}
            </Link>
        </li>
    ))}
</ul>
</div>
</div>
))
}
</div>
</div>
    );
}

export default App;


















// import React, { useState } from 'react';
// import { Link } from "react-router-dom";
// import axios from 'axios';
// import "./data.css";

// function App() {
//     const [interestedCourse, setInterestedCourse] = useState('');
//     const [recommendations, setRecommendations] = useState({});

//     // Dictionary to map levels to links
//     const courseLinks = {
//         Beginner: ["https://youtu.be/_uQrJ0TkZlc?si=npaQe3B0O7lqxrHy/beginner-course-1","https://youtu.be/lfmg-EJ8gm4?si=60vpRo-sAuJbgVfx/beginner-course-2",],
//         Medium: ["https://www.youtube.com/watch?v=msEmUtYqVV0/medium-course-1",],
//         Advanced: ["https://youtu.be/NWnBxQjssvQ?si=CyzgKp9pragFUTO6/advanced-course-1",],
//     };
//     const projectLinks = {
//       Beginner: ["https://www.example.com/beginner-projects//beginner-project-1",],
//       Medium: ["https://www.example.com/medium-projects/medium-project-1",],
//       Advanced: ["https://www.example.com/advanced-projects/advanced-project-1",],
//   };

//     const handleSubmit = async (e) => {
//         e.preventDefault();

//         try {
//             // Make a POST request to the Flask backend
//             const response = await axios.post('http://localhost:5000/api/data', { interested_course: interestedCourse });

//             // Update recommendations state with the received data
//             setRecommendations(response.data);
//         } catch (error) {
//             console.error('Error fetching recommendations:', error);
//         }
//     };

//     return (
//         <div className='interested-course'>
//             <form onSubmit={handleSubmit} className='interested-course-form'>
//                 <label htmlFor="interested_course" className='interested-course-label'> You are Interested in __________? </label><br />
//                 <input
//                     type="text"
//                     id="interested_course"
//                     name="interested_course"
//                     className='interested-course-1'
//                     value={interestedCourse}
//                     onChange={(e) => setInterestedCourse(e.target.value)}
//                 /><br /> <br />
//                 <input type="submit" value="Submit" className='interested-course-submit' />
//             </form>
//             <div className='recommendations-container'>
//                 {Object.keys(recommendations).map((index) => (
//                     <div key={index}>
//                         <h2 className='recommendations-index'> Recommendations for {recommendations[index].level} </h2>
//                         <div className='recommendations-index-flex'>
//                         <div class="Wrapper-sc-fvyqwl-1 iZEyIQ1 AssignmentList__Timeline-sc-1t9paan-2 chIzFH">
//            <ul className="Circle-sc-fvyqwls-1">
//              <li>
//                <div class="Circle-sc-fvyqwl-0 jNeOpF1">
//                 </div>
//                  </li>
//                <li>
//                   <div class="Circle-sc-fvyqwl-0 lfeMSB1 lfem1">
//                      </div>
//                     </li>
//                      <li>
//                    <div class="Circle-sc-fvyqwl-0 lfeMSB1 lfem1">
//                     </div>
//                     </li>
//                      <li>
//                        <div class="Circle-sc-fvyqwl-0 lfeMSB1 lfems1">
//                          </div>
//                          </li>
//                          <li>
//                     <div class="Circle-sc-fvyqwl-0 lfeMSB1 lfembs1">
//                       </div>
//                    </li>
//              </ul>
//            </div> 
//            <ul className='recommendations-ul'>
//         {recommendations[index].courses && recommendations[index].courses.map((item, itemIndex) => (
//             <li key={itemIndex} className='recommendations-li'>
//                 <Link to={courseLinks[recommendations[index].level][itemIndex]} target="_blank" rel="noopener noreferrer">
//                 {itemIndex + 1}.{item}
//                 </Link>
//             </li>
//         ))}
//     </ul>
//     <ul className="recommendations-ul">
//         {recommendations[index].projects && recommendations[index].projects.map((item, itemIndex) => (
//             <li key={itemIndex} className='recommendations-li'>
//                <Link to={projectLinks[recommendations[index].level][itemIndex]} target="_blank" rel="noopener noreferrer">
//                {itemIndex + 1}.{item}
//                </Link> 
//             </li>
//         ))}
//     </ul>
// </div>
// </div>
// ))
// }
// </div>
// </div>
//     );
// }

// export default App;


