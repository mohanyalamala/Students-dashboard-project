import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
//import huebits from "../StudentsHomePage/huebits.png";
import Internet from "../images/cloud-computing_5586209.png";
import Headerpage from "../Headerpage/Headerpage";
import Embedde from "../images/images.png";
import DigitalMarketing from "../images/Digital-Marketing.png";
import DataScience from "../images/Data-Science.png";
import Robotics from "../images/robot_4973328.png";
import FullstackDevelopment from "../images/layers_2491508.png";
//import Full    from "../StudentsHomePage/Fullstack.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck,faArrowRight  } from "@fortawesome/free-solid-svg-icons";
import Carousel from "./carousel";
import product from "../Companies/product.jpg";
import behaves from "./behaves.jpg";
import ShareIcon from "./Shareses";
import MeetingIcon from "./Meetinges";
import WebDesignIcon from "./Webdesignes";
import BasketSimpleIcon from "./Basketsimples";
import GiftIcon from "./Gifticons";
//import { ShareIcon } from 'react-icons';
import "./homepage.css";


const Compaines = () => {
  const [showProductImage, setShowProductImage] = useState(false);

  useEffect(() => {
    // Add logic here to toggle the image after a certain time or based on any condition
    const timer = setTimeout(() => {
      setShowProductImage((prev) => !prev);
    }, 1000); // Change the time (in milliseconds) as needed

    return () => clearTimeout(timer);
  }, [showProductImage]);
    return (
      <div className="students-flex companies-flex">
      <Headerpage />
        <div className="homepagecolores">
            <div className="getstarted-flex">
            <ul>
                <li className="getstarted-flex-span"><h1 className="brilliant">Where brilliant minds</h1>
                <h2 className="build">help you build your product
                <span className="spansexports">Our experts and innovators helps startups /companies build Prototypes/Proof of Concepts / Products</span></h2></li>
                <Link to="/transformation"><button className="buttonget">Get Started
                <FontAwesomeIcon icon={faArrowRight} className="faArrowRight" />
                </button></Link>
                <button className="buttonget" id="buttonget-1" >Learn More
                <FontAwesomeIcon icon={faArrowRight} className="faArrowRight" />
                </button>
              </ul>
              <div>
                   {showProductImage ? (
                   <img className="huebitsimg" src={product} alt="" />
                   ) : (
                   <img className="huebitsimg" src={behaves} alt="" />
                   )}
                {/* <img className="huebitsimg" src={product} alt=""/> */}
            </div>
            </div>
            <div className="companies-center">
                <div className="companies-center">
                    <h1 className="companiess">We help companies to build their POC/ Prototypes/Products</h1>
                    <p className="spans"><span className="companiesspan">We help companies connect with our team of experts, student innovators through<br/> 
                    low-maintenance experiential learning collaborations designed to benefit all<br/>
                    parties involved.</span></p>
                </div>
                <div className="cardflexs">
                <div className="card">
                <img className="card-img-top" src={Internet} alt="Internet"/>
                <div className="card-body">
                <h5 className="card-title">Internet of Things</h5>
                <p className="card-text"><span className="spansp">We have a unique approach for developing IoT PoC. This helps you get the maximum out of your IoT Product!</span></p>
                <Link to="/internetofthings"><button className="btn btn-primary-1">Learn More
                <FontAwesomeIcon icon={faArrowRight} className="faArrowRight" />
                </button></Link>
                </div>
                </div>
              <div className="card">
              {/* <img className="card-img-top"
               srcSet="https://cloud-1de12d.b-cdn.net/media/iW=68&amp;iH=68&amp;oX=0&amp;oY=0&amp;cW=68&amp;cH=68/d0e8d40a211d68e08b5c4f11cd5b85d0/image.png 1x, https://cloud-1de12d.b-cdn.net/media/iW=136&amp;iH=136&amp;oX=0&amp;oY=0&amp;cW=136&amp;cH=136/d0e8d40a211d68e08b5c4f11cd5b85d0/image.png 2x"
               src="https://cloud-1de12d.b-cdn.net/media/iW=54&amp;iH=54&amp;oX=0&amp;oY=0&amp;cW=54&amp;cH=54/d0e8d40a211d68e08b5c4f11cd5b85d0/image.png"
               alt="" draggable="false" loading="lazy" /> */}
                <img className="card-img-top" src={Embedde} alt="Internet"/>
                <div className="card-body">
                <h5 className="card-title">Embedded Systems</h5>
                <p className="card-text"><span className="spansp">We design and build embedded systems products for startups and tech companies.</span></p>
                <Link to="/embeddedsystems"><button className="btn btn-primary-1">Learn More
                <FontAwesomeIcon icon={faArrowRight} className="faArrowRight" />
                </button></Link>
              </div>
              </div>
              <div className="card">
                <img className="card-img-top" src={DataScience} alt="Internet"/>
                <div className="card-body">
                <h5 className="card-title">Data Science- AI/ML/DL</h5>
                <p className="card-text"><span className="spansp">Driving enterprise transformation by accelerating analytics initiatives and promoting intelligent insights in near real-time</span></p>
                <Link to="/datascience"><button className="btn btn-primary-1">Learn More
                <FontAwesomeIcon icon={faArrowRight} className="faArrowRight" />
                </button>
                </Link>
              </div>
              </div>
              </div>
              <div className="cardflexs">
                <div className="card">
                <img className="card-img-top" src={DigitalMarketing} alt="Internet"/>
                <div className="card-body">
                <h5 className="card-title">Digital Marketing & Cyber Security</h5>
                <p className="card-text"><span className="spansp">We help companies in protecting against advanced threats, arising daily</span></p>
                <Link to="/digitalmarketing "><button className="btn btn-primary-1">Learn More
                <FontAwesomeIcon icon={faArrowRight} className="faArrowRight" />
                </button>
                </Link>
                </div>
                </div>
              <div className="card">
                <img className="card-img-top" src={Robotics} alt="Internet"/>
                <div className="card-body">
                <h5 className="card-title">Robotics, Drones- AI</h5>
                <p className="card-text"><span className="spansp">We design and Develop Robots or Drones Proof of Concept</span></p>
                <Link to="/robotics"><button className="btn btn-primary-1">Learn More
                <FontAwesomeIcon icon={faArrowRight} className="faArrowRight" />
                </button>
                </Link>
              </div>
              </div>
              <div className="card">
                <img className="card-img-top" src={FullstackDevelopment} alt="Internet"/>
                <div className="card-body">
                <h5 className="card-title">Full stack Development</h5>
                <p className="card-text"><span className="spansp">We provide expert web application development and web design services to our clients</span></p>
                <Link to="/fullstackdevelopment"><button className="btn btn-primary-1">Learn More
                <FontAwesomeIcon icon={faArrowRight} className="faArrowRight" />
                </button>
                </Link>
              </div>
              </div>
              </div>
              <div className="getstarted-flex">
              <div>
                <img className="huebitsimgses" src={behaves} alt=""/>
                </div>
               <ul>
                <li className="getstarted-flex-span"><h1 className="behaveses">What your company looks like and how it behaves</h1>
                <p><span className="spansp">
                We create websites that are both functional and energising - 
                providing users with a holistic experience that will make
                them want to take action. We uncover and highlight the things that make your company special.
                </span></p></li>
                <Link to="/login"><button className="buttongets">Get Started
                <FontAwesomeIcon icon={faArrowRight} className="faArrowRight" />
                </button></Link>
                </ul>
            </div>
            <div className="carouselsimages">
            <div className="creativeproducts">
              <br/>
              <h1 className="creativeproductsh1">
              We design and build creative products
              </h1>
              <p><span className="getstarted-flex-spans spans-2">Creating Proof of Concepts / prototypes / 
                Consulting Services for various digital transformation technologies.
               Some of our solutions/products built for clients </span></p>
            </div>
            <Carousel />
            </div>
            <div>
            </div>
            <div className="peculiars">
            <div className="getstarted-flex">
            <ul>
                <li><h1 className="peculiar">
                We're a peculiar bunch of people with a passion for branding
                </h1>
                <span className="empoweringspan">Empowering digital product leaders</span>
                <span className="creates">
                We create and deliver data-driven customer 
                experiences that achieve extraordinary outcomes.
                 Our specialties are in strategy, UX design, UI design,
                  iOS and Android mobile app development and web development.
                  </span></li>
                <Link to=""><button className="buttongets" id="buttongets">Learn More
                <FontAwesomeIcon icon={faArrowRight} className="faArrowRight" />
                </button></Link>
                </ul>
                <div className="brz-css-v83gu">
  <picture className="brz-picture brz-d-block brz-p-relative brz-css-v83gu">
    <source
      srcSet="https://cloud-1de12d.b-cdn.net/media/iW=536&iH=538&oX=0&oY=0&cW=536&cH=538/18abdf781d84f13d5f19618e760c52d3/image.jpg 1x, https://cloud-1de12d.b-cdn.net/media/iW=1072&iH=1076&oX=0&oY=0&cW=1072&cH=1076/18abdf781d84f13d5f19618e760c52d3/image.jpg 2x"
      media="(min-width: 992px)"
    />
    <source
      srcSet="https://cloud-1de12d.b-cdn.net/media/iW=342&iH=343&oX=0&oY=0&cW=342&cH=343/18abdf781d84f13d5f19618e760c52d3/image.jpg 1x, https://cloud-1de12d.b-cdn.net/media/iW=684&iH=686&oX=0&oY=0&cW=684&cH=686/18abdf781d84f13d5f19618e760c52d3/image.jpg 2x"
      media="(min-width: 768px)"
    />
    <img
      className="brz-img-projects"
      srcSet="https://cloud-1de12d.b-cdn.net/media/iW=430&iH=432&oX=0&oY=0&cW=430&cH=432/18abdf781d84f13d5f19618e760c52d3/image.jpg 1x, https://cloud-1de12d.b-cdn.net/media/iW=860&iH=864&oX=0&oY=0&cW=860&cH=864/18abdf781d84f13d5f19618e760c52d3/image.jpg 2x"
      src="https://cloud-1de12d.b-cdn.net/media/iW=536&iH=538&oX=0&oY=0&cW=536&cH=538/18abdf781d84f13d5f19618e760c52d3/image.jpg"
      alt=""
      draggable="false"
      loading="lazy"
    />
  </picture>
</div>
  </div>
  </div>
            <div className="Choose-Services">
              <div className="Choose-Service">
              <h1 className="Choose">Choose Service</h1>
              </div>
              <div className="Choose-Serviceses">
                {/* <p className="spanbusiness"><span>
                We want to help set your business on the path of success.
                  </span> */}
                  <p>
                  <div className="inr2-3-lakh-flex">
                  <div className="inr2-3">
                    <div className="Productsp">
                    <p className="products-1">Product Development / Proof Of Concept / Prototyping</p>
                    <h1><span>INR</span>3-5 Lakh</h1>
                    <h3>For Project</h3>
                    </div>
                    <div className="flex-Internet-of-Things">
                      <div className="Internet-of-Things-1">
                        <p> <FontAwesomeIcon icon={faCheck} className="fontawsomeicon" />
                        Internet of Things</p>
                        <p><FontAwesomeIcon icon={faCheck} className="fontawsomeicon" />
                          Indutrial IoT</p>
                        <p><FontAwesomeIcon icon={faCheck} className="fontawsomeicon" />
                          Embedded Systems</p>
                        <p><FontAwesomeIcon icon={faCheck} className="fontawsomeicon" />
                          Robotics/Drones</p>
                        <p><FontAwesomeIcon icon={faCheck} className="fontawsomeicon" />
                          Web Application Development</p>
                        <p><FontAwesomeIcon icon={faCheck} className="fontawsomeicon" />
                          Data Science</p>
                        </div>
                        <Link to="/transformation"><button className="buttonget" id="buttonget1">
                          Post a Project
                        </button></Link>
                      {/* <button className="buttonget" id="buttonget1">Post a Project</button> */}
                    </div>
                    </div>
                    <div className="inr2-4">
                    <p>Research Consultancy and Services</p>
                    <h1><span>INR</span>2-4 Lakh</h1>
                    <h3>For Project</h3>
                    <div className="flex-Internet-of-Things">
                      <div className="Internet-of-Things-1">
                        <p><FontAwesomeIcon icon={faCheck} className="fontawsomeicon" />
                        Data Science Research and Consulting</p>
                        <p><FontAwesomeIcon icon={faCheck} className="fontawsomeicon" />
                        Digital Marketing</p>
                        <p><FontAwesomeIcon icon={faCheck} className="fontawsomeicon" />
                          Web Application Development</p>
                        <p><FontAwesomeIcon icon={faCheck} className="fontawsomeicon" />
                          Cyber Security</p>
                        <p><FontAwesomeIcon icon={faCheck} className="fontawsomeicon" />
                          Content Development</p>
                        </div>
                        <Link to="/transformation"><button className="buttonget" id="buttonget1">
                          Post a Project
                        </button></Link>
                      {/* <button className="buttonget" id="buttonget1">Post a Project</button> */}
                    </div>
                  </div>
                  </div>
                  </p>
              </div>
            </div>
            <div className="HowitWorks1">
              <h1 className="howitworks-1">How it Works</h1>
              <div className="HowitWorks">
              <div className="sharpost-1">
              <ShareIcon />
              {/* <img className="card-img-top" src={Internet} alt="Internet"/> */}
              <p className="Marketplace"><span className="spans-1">Companies Post a project to our Project Marketplace 
                describing your business need.</span></p>
              </div>
              <div className="meetingiconsexperts">
              <MeetingIcon />
              {/* <img className="card-img-top" src={Internet} alt="Internet"/> */}
              <p className="executionplan"><span className="spans-1">Our Expert team and student innovators prepares project
                 feasibility and execution plan</span></p>
              </div>
              <div className="webdesignicons">
              <WebDesignIcon />
              {/* <img className="card-img-top" src={Internet} alt="Internet"/> */}
                <p className="timeline"><span className="spans-1">Completes the project in the timeline</span></p>
              </div>
              <div className="basketsimapleicons">
              <BasketSimpleIcon />
              {/* <img className="card-img-top" src={Internet} alt="Internet"/> */}
              <p className="theirportfolios"><span className="spans-1">Receive project work and provide feedback.</span></p>
              </div>
              </div>
            </div>
            </div>
            <div className="brz-imgdiv">
            <img className="brz-img-1" 
            srcset="https://cloud-1de12d.b-cdn.net/media/iW=430&amp;iH=66&amp;oX=0&amp;oY=0&amp;cW=430&amp;cH=66/d08-curve-line-img/image.png 1x, 
             https://cloud-1de12d.b-cdn.net/media/iW=860&amp;iH=132&amp;oX=0&amp;oY=0&amp;cW=860&amp;cH=132/d08-curve-line-img/image.png 2x" 
            src="https://cloud-1de12d.b-cdn.net/media/iW=1170&amp;iH=181&amp;oX=0&amp;oY=0&amp;cW=1170&amp;cH=181/d08-curve-line-img/image.png" 
            alt="" draggable="false" loading="lazy" />
           </div>
           <div className="learnto">
    <div className="learncenter">
        <video className="background-video" autoPlay loop muted playsInline>
            <source
                src={require("../images/WhatsApp Video 2024-02-29 at 22.56.05_b9a41f24.mp4")}
                type="video/mp4"
            />
            Your browser does not support the video tag.
        </video>
        <div className="video-overlay">
        <div className="video-overlay-1">
            <h2 className="learncenter-1">Yes, I want to learn how to grow my business</h2>
            <Link to="">
                <button className="buttongets claim-1" id="buttongets">
                    Claim Your Webinar Spot 
                    <FontAwesomeIcon icon={faArrowRight} className="faArrowRight" />
                </button>
            </Link>
            </div>
            <p className="freebonus">
                <GiftIcon />
                FREE BONUS:<span className="freebonus-1">THE 16-PAGE EBOOK MARKETING 101</span>
            </p>
            </div>
            </div>
              <div className="backgroundimage"> 
                <h1>What's the investment in your business?</h1>
                <p className="offerwhite">We offer high quality branding, for an affordable price.  All delivered on-time and on-budget.</p>
                <button className="buttonget" id="buttonget1">Let's Talk</button>
              </div>
            </div>
            <div>
              <h1>
              The latest news, analysis and opinion on visual identities, branding, and design
              </h1>
            </div>

</div>
</div>
    )
}


export default Compaines;