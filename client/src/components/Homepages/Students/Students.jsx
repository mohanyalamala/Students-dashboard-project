import React,{useState,useEffect} from "react";
import Headerpage from "../Headerpage/Headerpage";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight,faToggleOn, faToggleOff  } from "@fortawesome/free-solid-svg-icons";
import product from "./images/carousel.jpg";
import behaves from "../Companies/behaves.jpg";
// import SystemUpdateIcon from './SystemUpdateIcon';
// import Stating from "./Setting";
// import AwardIconsawared from "./awardsiconsawared ";
// import FactoryIcon from "./Factorys";
// import BriefcaseIcon from "./Briefcases";
// import ShirtBusinessIcon from "./Shirtbusiness";
import Caursers from "./caursers";
import Bestplan from "./Bestplan";
import Bestplanyr from "./Bestplanyr";
import Peculier from "./Peculier";
import Background from "./Background";
import Workese from "./workses";
import "./Students.css";

const Students = () => {
  const [showProductImage, setShowProductImage] = useState(false);
  const [billingType, setBillingType] = useState("monthly");

    const handleToggleBilling = () => {
      setBillingType((prevType) => (prevType === "monthly" ? "annual" : "monthly"));
    };
    

    

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
        <div className="homepagecolores homepagecolores-1">
        <div className="aboutus-1">
        <div className="homepagecolor">
            <div className="getstarted-flex getstarted-flex-1">
            <ul>
                <li className="getstarted-flex-span"><h1 className="studentsjoin">Student,
                <spa className="studentsjoinbuild">Join the forces of Positive Transformation</spa>
                <spa className="spansexports1">Learn to become Industry Ready. We are introducing a new way to earn work experience.</spa></h1></li>
                <Link to="/login"><button className="buttonget">Get Started
                <FontAwesomeIcon icon={faArrowRight} className="faArrowRight" />
                </button></Link>
                <button className="buttonget" id="buttonget-1">Learn More
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
                {/* <img className="huebitsimgs-1" src={product} alt=""/> */}
            </div>
            <div className="companies-center">
                <div className="companies-center">
                <button className="buttonget buttonget-1" id="buttonget1">Learning Paths
                <FontAwesomeIcon icon={faArrowRight} className="faArrowRight" />
                </button>
                    <h1 className="companiess">Get ready for the most exciting part of your studies</h1>
                    <p className="spans"><span className="spanes-1">Learn latest digital transformation technologies from scratch,
                     build exciting projects, earn industrial experience and get hired. </span></p>
                </div>
                <div className="cardflexs">
                <div className="card">
                <img
                className="card-img-top"
                srcSet="https://cloud-1de12d.b-cdn.net/media/iW=68&amp;iH=68&amp;oX=0&amp;oY=0&amp;cW=68&amp;cH=68/ba362530c23a4e35eff5b6e70334c116/data-science.png 1x, https://cloud-1de12d.b-cdn.net/media/iW=136&amp;iH=136&amp;oX=0&amp;oY=0&amp;cW=136&amp;cH=136/ba362530c23a4e35eff5b6e70334c116/data-science.png 2x"
                src="https://cloud-1de12d.b-cdn.net/media/iW=54&amp;iH=54&amp;oX=0&amp;oY=0&amp;cW=54&amp;cH=54/ba362530c23a4e35eff5b6e70334c116/data-science.png"
                alt=""
                draggable="false"
                loading="lazy"/>
                {/* <img className="card-img-top" src={Internet} alt="Internet"/> */}
                <div className="card-body">
                <h5 className="card-title">Data Science- AI/ML/DL</h5>
                <p className="card-text"><span className="spansp">with knowledge in emerging technologies such as AI/ML/DL,
                 this course helps students shape their future in creating intelligent products</span></p>
                <Link to="/datascience"><button className="btn btn-primary-1">Learn More
                <FontAwesomeIcon icon={faArrowRight} className="faArrowRight" />
                </button>
                </Link>
                </div>
                </div>
              <div className="card">
              <img className="card-img-top"
               srcSet="https://cloud-1de12d.b-cdn.net/media/iW=68&amp;iH=68&amp;oX=0&amp;oY=0&amp;cW=68&amp;cH=68/5523477f9dd176e073c79d71938ea7c2/iot.png 1x, https://cloud-1de12d.b-cdn.net/media/iW=136&amp;iH=136&amp;oX=0&amp;oY=0&amp;cW=136&amp;cH=136/5523477f9dd176e073c79d71938ea7c2/iot.png 2x"
               src="https://cloud-1de12d.b-cdn.net/media/iW=54&amp;iH=54&amp;oX=0&amp;oY=0&amp;cW=54&amp;cH=54/5523477f9dd176e073c79d71938ea7c2/iot.png"
               alt="" draggable="false" loading="lazy" />
                {/* <img className="card-img-top" src={Embedde} alt="Internet"/> */}
                <div className="card-body">
                <h5 className="card-title">Internet of Things</h5>
                <p className="card-text"><span className="spansp">True, In-Depth Core Hands-on end-to-end
                 IoT Training with Live use cases using IoT Hardware Kit & IoT Cloud Platforms. Get End-to-End IoT Training by core IoT Developers, Not just Trainers. </span></p>
                <Link to="/internetofthings"><button className="btn btn-primary-1">Learn More
                <FontAwesomeIcon icon={faArrowRight} className="faArrowRight" />
                </button>
                </Link>
              </div>
              </div>
              <div className="card">
              <img className="card-img-top"
               srcSet="https://cloud-1de12d.b-cdn.net/media/iW=68&amp;iH=68&amp;oX=0&amp;oY=0&amp;cW=68&amp;cH=68/f830078b71a07fee371ca1a945cbbde4/chip.png 1x, https://cloud-1de12d.b-cdn.net/media/iW=136&amp;iH=136&amp;oX=0&amp;oY=0&amp;cW=136&amp;cH=136/f830078b71a07fee371ca1a945cbbde4/chip.png 2x"
               src="https://cloud-1de12d.b-cdn.net/media/iW=54&amp;iH=54&amp;oX=0&amp;oY=0&amp;cW=54&amp;cH=54/f830078b71a07fee371ca1a945cbbde4/chip.png"
               alt="" draggable="false" loading="lazy" />
                {/* <img className="card-img-top" src={Internet} alt="Internet"/> */}
                <div className="card-body">
                <h5 className="card-title">Embedded Systems</h5>
                <p className="card-text"><span className="spansp">This course will impart hands-on
                 experience on a spectrum of embedded applications, thereby making students industry-ready.</span></p>
                <Link to="/embeddedsystems"><button className="btn btn-primary-1">Learn More
                <FontAwesomeIcon icon={faArrowRight} className="faArrowRight" />
                </button>
                </Link>
              </div>
              </div>
              </div>
              <div className="cardflexs">
                <div className="card">
                <img className="card-img-top"
                 srcSet="https://cloud-1de12d.b-cdn.net/media/iW=68&amp;iH=68&amp;oX=0&amp;oY=0&amp;cW=68&amp;cH=68/b59cf78e4e96b421abe3b802a0f61e10/cyber-security.png 1x, https://cloud-1de12d.b-cdn.net/media/iW=136&amp;iH=136&amp;oX=0&amp;oY=0&amp;cW=136&amp;cH=136/b59cf78e4e96b421abe3b802a0f61e10/cyber-security.png 2x"
                 src="https://cloud-1de12d.b-cdn.net/media/iW=54&amp;iH=54&amp;oX=0&amp;oY=0&amp;cW=54&amp;cH=54/b59cf78e4e96b421abe3b802a0f61e10/cyber-security.png"
                 alt="" draggable="false" loading="lazy" />
                {/* <img className="card-img-top" src={Internet} alt="Internet"/> */}
                <div className="card-body">
                <h5 className="card-title">Cyber Security</h5>
                <p className="card-text"><span className="spansp">with cyber resilience, this course brings
                 knowledge in data security, network security, application security along with identity and access management</span></p>
                <Link to="/cybersecurity"><button className="btn btn-primary-1">Learn More
                <FontAwesomeIcon icon={faArrowRight} className="faArrowRight" />
                </button>
                </Link>
                </div>
                </div>
              <div className="card">
              <img className="card-img-top"
              srcSet="https://cloud-1de12d.b-cdn.net/media/iW=68&amp;iH=68&amp;oX=0&amp;oY=0&amp;cW=68&amp;cH=68/b02e9d8c883b38d776bd961594950f39/robotic-arm.png 1x, https://cloud-1de12d.b-cdn.net/media/iW=136&amp;iH=136&amp;oX=0&amp;oY=0&amp;cW=136&amp;cH=136/b02e9d8c883b38d776bd961594950f39/robotic-arm.png 2x"
              src="https://cloud-1de12d.b-cdn.net/media/iW=54&amp;iH=54&amp;oX=0&amp;oY=0&amp;cW=54&amp;cH=54/b02e9d8c883b38d776bd961594950f39/robotic-arm.png"
              alt="" draggable="false" loading="lazy" />
                {/* <img className="card-img-top" src={Internet} alt="Internet"/> */}
                <div className="card-body">
                <h5 className="card-title">Robotics - AI</h5>
                <p className="card-text"><span className="spansp">Robotics involves the design, construction, operation, and use of robots.
                 The goal of robotics is to design robots that can help and assist humans. Learn how  Master the most advanced Robotics, 
                 Electronic, Automation and IoT Cloud technology and build projects using Robotic Kit. </span></p>
                <Link to="/robotics"><button className="btn btn-primary-1">Learn More
                <FontAwesomeIcon icon={faArrowRight} className="faArrowRight" />
                </button>
                </Link>
              </div>
              </div>
              <div className="card">
              <img className="card-img-top"
              srcSet="https://cloud-1de12d.b-cdn.net/media/iW=68&amp;iH=68&amp;oX=0&amp;oY=0&amp;cW=68&amp;cH=68/5f86648dff3c8e83cdd9253b492e839e/full-stack.png 1x, https://cloud-1de12d.b-cdn.net/media/iW=136&amp;iH=136&amp;oX=0&amp;oY=0&amp;cW=136&amp;cH=136/5f86648dff3c8e83cdd9253b492e839e/full-stack.png 2x"
              src="https://cloud-1de12d.b-cdn.net/media/iW=54&amp;iH=54&amp;oX=0&amp;oY=0&amp;cW=54&amp;cH=54/5f86648dff3c8e83cdd9253b492e839e/full-stack.png"
              alt="" draggable="false" loading="lazy" />
                {/* <img className="card-img-top" src={Internet} alt="Internet"/> */}
                <div className="card-body">
                <h5 className="card-title">Full stack Development</h5>
                <p className="card-text"><span className="spansp">With versatility and agility, this course brings in-depth expertise on web and app development</span></p>
                <Link to="/fullstackdevelopment"><button className="btn btn-primary-1">Learn More
                <FontAwesomeIcon icon={faArrowRight} className="faArrowRight" />
                </button>
                </Link>
              </div>
              </div>
              </div>
              <div>
                <Workese />
              </div>
              <div>
              <div>
                <div className="Unemployability">
                  <h1 className="Unemployability-1">"Unemployability" is bigger problem than unemployment</h1>
                  <p className="Unemployability-p">Huebits(TM) puts together a personalized schedule to suit the student's
                   career aspirations as well as industry needs. Connect with us to know more</p>
              <Caursers />
                </div>
              <div className="peculier">
                <Peculier />
              </div>
              <div className="Choose-Services">
        <button className="toggle-button" onClick={handleToggleBilling}>
          {billingType === "monthly" ? (
            <>
              <span className="mothlybilling">Monthly billing</span>
              <FontAwesomeIcon icon={faToggleOn} className="toggle-icon" />
            </>
          ) : (
            <>
              <FontAwesomeIcon icon={faToggleOff} className="toggle-icon" />
              <span className="annualbilling">Annual billing</span>
            </>
          )}
        </button>
        <h1 className="Choose bestplanchoose">Choose your best plan for success </h1>
      </div>
      {billingType === "monthly" && <Bestplan />}
      {billingType === "annual" && <Bestplanyr />}
              {/* <div className="Choose-Services">
              <button onClick={handleToggleBilling}>
              {billingType === "monthly" ? "Monthly billing" : "Annual billing"}
              </button>
              <h1 className="Choose bestplanchoose">Choose your best plan for success </h1>
              </div>
               {billingType === "monthly" && <Bestplan />}
               {billingType === "annual" && <Bestplanyr />} */}
              <div className="backgroundimage-1">
            <Background />
          </div>
        </div>
        </div>
    </div>
    </div>
    </div>
    </div>
    </div>
    )
}

export default Students;






//const [showProductImage, setShowProductImage] = useState(false);
// const [BestplanLink, setbestplanLink] = useState(null);
// const [BestplanyrLink, setbestplanyrLink] = useState(null);
// const [isButtonOn, setIsButtonOn] = useState(true);
//const [billingType, setBillingType] = useState("monthly");

  // const handleLinkClick = (linkName) => {
  //     setbestplanLink(linkName);
  //     setbestplanyrLink(linkName);
  //     setIsButtonOn(!isButtonOn);
  // };

{/* <div className="Choose-Services">
              <Link
              className={BestplanLink === 'bestplan' ? 'bestplan-link' : 'bestplan-link'}
              onClick={() => handleLinkClick('bestplan')} >
             <button>Monthly billing</button>
          </Link>
          <Link
            className={BestplanyrLink === 'bestplanyr' ? 'bestplanyr-link' : 'bestplanyr-link'}
            onClick={() => handleLinkClick('bestplanyr')}>
            <button>Annual billing</button>
          </Link> */}
                {/* <Link
                className={BestplanLink === 'bestplan' ? 'bestplan-link' : 'bestplan-link'}
                onClick={() => handleLinkClick('bestplan')}
            >
            <button>{isButtonOn ? 'Monthly billing' : 'Annual billing'}</button>
            </Link>
            <Link
                className={BestplanyrLink === 'bestplanyr' ? 'bestplanyr-link' : 'bestplanyr-link'}
                onClick={() => handleLinkClick('bestplanyr')}
            >
            <button>{isButtonOn ? 'Annual billing' : 'Monthly billing'}</button>
            </Link> */}
            {/* <h1 className="Choose bestplanchoose">Choose your best plan for success </h1>
            </div>
            <p className='bestplan'>{BestplanLink === 'bestplan' && <Bestplan />}</p>
            <p className='bestplanyr'>{BestplanyrLink === 'bestplanyr' && <Bestplanyr />}</p> */}

{/* <button>Monthly billing</button> */}
{/* <button>Annual billing</button> */}
