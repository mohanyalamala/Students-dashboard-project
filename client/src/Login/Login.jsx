import React, {useState} from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from 'axios';
import Headrepage from "../components/Homepages/Headerpage/Headerpage";
import behaves from "../components/Homepages/images/images/6.png";
//import { FaGoogle } from "react-icons/fa";
import Google from "../components/Homepages/images/google.png";
import LinkedIn from "../components/Homepages/images/linkedin.png";
import './Login.css';


  function Login(){
  const navigate = useNavigate();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [message, setMessage] = useState(null);
  const [loading, setLoading] = useState(false);
  //const [isEmailEntered, setIsEmailEntered] = useState(false);

  
    const submitHandler = async (e) => {
      e.preventDefault();
      setError('');
      setLoading(true);

        try {
          const response = await axios.post("http://localhost:8000/api/login", { username, password });
          //if (response.data.success) {
            if (response.status === 200) {
            setMessage("Login Successful");
            setTimeout(() => {
              setMessage(null);
              navigate("/dashboard", { state: { id: username } });
            }, 2000);
          } else {
            //setError(response.data.message);
            setError("An unexpected error occurred");
          }
        } catch (error) {
          console.error('Error during login:', error);
        setError("Invalid credentials");
          console.error('Error during login:', error.response);
          setError(error.response?.data || "Invalid credentials");
        } finally {
          setLoading(false);
        }
      };
      //google login
      const loginwithgoogle = ()=>{
        window.open("http://localhost:8000/api/auth/google/server","_self")
      }
      
      /*const handleEmailChange = (e) => {
        setUsername(e.target.value);
        setIsEmailEntered(e.target.value.trim().length > 0);
      }*/

  return (
    <div className="students-flex">
            <Headrepage />
    <div className="signin-compaines">
  <div className="getstarted-flex">
  <div className="center1">
  <h1 className="center-login">
    Sign In to your account
  </h1>
  {/* <span className="social socials-1">Log in with your social profiles</span> */}
  <div className="linkedin-google">
    <Link className="link" role="button" onClick={loginwithgoogle}>
        {/* <i className="fab fa-google"></i> */}
        {/* <FaGoogle size={32} color="red" />; */}
        <img className="googleicon" src={Google} alt=""/>
      </Link>
      <Link className="link" to="/linkedin" role="button">
        {/* <i className="fab fa-linkedin"></i> */}
        <img className="linkedinicon" src={LinkedIn} alt=""/>
      </Link>
      </div>
      <div className="loginhr">
      <hr className="loginhrline"/>
      OR
      <hr className="loginhrline1"/>
      </div>
    <form action="/login" method="POST" id="lable" onSubmit= {submitHandler}>
      <div className="form-group">
        <label htmlFor="email" className="label1">Email</label>
        <input type="email" className="form-control" id="username" name="username" placeholder="Email address" autoFocus="off" required onChange={(e) => setUsername(e.target.value)} />
      </div>
      <div className="form-group">
        <label htmlFor="password" className="label1">Password</label>
        <input type="password" className="form-control" id="password" name="password" placeholder="Enter your password" autoFocus="off" required onChange={(e) => setPassword(e.target.value)} />
      </div>
        {/* <div className="checkbox">
            <span id="alert" className="check">{setError}</span>
            <input type="checkbox" className="form-controle1" autofocus="" required style={{position: 'absolute', left:'600px',top:'374px'}} />
            <span className="remember" style={{paddingLeft: '620px',top: '50px'}}>Rememberme</span>
            {/*<button type="button" className="recover">Recoverpassword</button>*/}
            {/* <Link to="/forgot-password" className="recover" style={{paddingLeft: '80px',top: '20px'}}>RecoverPassword</Link>
        </div> */}
        <div className="checkbox checkboxlogin-1">
          <span id="alert" className="check">{setError}</span>
          <input type="checkbox" className="form-controle1" autofocus="" required />
          <span className="remember rememberes-1">Rememberme</span>
          <Link to="/forgot-password" className="recover recoverpassword-1">RecoverPassword</Link>
        </div>
        <div >
          <p>{error && <span className="error-message">{error}</span>}
          {message && <span className="success-message">{message}</span>}</p>
          <button type="submit" id="signin" value="submit" disabled={loading}>{loading ? 'Signing in...' : 'SIGN IN'}</button><br/><br />
        </div>
        <div className="form-group">
          <div className="account">
            <p>
              Don't have an account?{" "}
              <Link to="/signup" className="loginhere" id="loginhere">
                Sign up here
              </Link>
            </p>
          </div>
        </div>
        </form>
        </div>
        <div>
        <img className="huebitsimgses" src={behaves} alt=""/>
    </div>
    </div>
   </div>
  </div>
  );
};

export default Login;



