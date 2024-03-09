import React, { useState } from "react";
import axios from 'axios';
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import Headrepage from "../components/Homepages/Headerpage/Headerpage";
import Google from "../components/Homepages/images/google.png";
import LinkedIn from "../components/Homepages/images/linkedin.png";
import behaves from "../components/Homepages/images/images/6.png";
import "./Register.css";


function Signup(){
  const [name, setName] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [,setLoading] = useState(false);
  const [passworderror, setpasswordError] = useState(null);
  const [error, setError] = useState(null);
  const [message, setMessage] = useState(null);

  const navigate = useNavigate();


    const handleSubmit = async (e) => {
        e.preventDefault();
        setError(null);
        setLoading(true);

      // Perform additional password strength checks
    // (you can customize this logic based on your requirements)
    const regExspecialChars = /^(?=.*\d)(?=.*[A-Z])(?=(.*\w){2})(?=.*[a-z])(?!.*\s).{8,}$/;
    if (password === "" || password === null) {
        setpasswordError("Password should not be blank");
    } else if (password.length < 8) {
        setpasswordError("Password should be more than 8 characters");
    } else if (!regExspecialChars.test(password)) {
        setpasswordError("Password should contain at least 1 digit, 2 special characters, and 1 lower and upper letters");
    } else if(password !== confirmPassword){
      setpasswordError("Confirm password does not match");
    } else { 
      document.getElementById("alert").innerText = "";
      //error

        try{
            const response = await axios.post('http://localhost:8000/api/signup', {name,username, password,confirmPassword});
            console.log('Registration response:', response.data);
            setMessage("Registration Successful");
            setTimeout(() => {
            navigate('/login');
          }, 2000);
        } catch (error) {
            if (error.response) {
                setError(error.response.data.error);
            } else {
                console.error('An unexpected error occurred:', error);
            }
        }finally{
            setLoading(false);
        }
      }//error
    };

    //google
    const loginwithgoogle = ()=>{
      window.open("http://localhost:8000/api/auth/google/server","_self")
    }

  const togglePasswordInput = () => {
    const passwordInput = document.getElementById("password");
    const icon = document.querySelector(".fac i");

    if (passwordInput.type === "password") {
      passwordInput.type = "text";
      icon.classList.remove("fa-eye");
      icon.classList.add("fa-eye-slash");
    } else {
      passwordInput.type = "password";
      icon.classList.remove("fa-eye-slash");
      icon.classList.add("fa-eye");
    }
  };

  const checkEmailExists = () => {

  };
  const clearPasswordError = () => {
    setpasswordError(null);
  };

  return (
    <div className="students-flex">
            <Headrepage />
    <div className="getstarted-flex">
    <div className="signin-compaines">
    <div className="center1">
    <h1 className="center-login">
      Sign Up to your account
    </h1>
      {/* <span className="social socials-1">Log in with your social profiles</span> */}
    <div className="linkedin-google">
          <Link className="link" role="button" onClick={loginwithgoogle}>
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
        {/* <h1 className="register">Students Complete your registration</h1> */}
      <form
        action="/signup"
        method="POST"
        id="lable"
        onSubmit={(e) => handleSubmit(e)} >
        <div className="form-group">
            <p>
                <label htmlFor="name" className="label2">Full NAME<span> *</span></label>
                <i className="fas fa-user userfase1"></i>
                <input type="text" name="name" id="name" className="form-control" placeholder="enter first name" autoFocus="" required style={{paddingLeft: '30px'}} onChange={(e) => setName(e.target.value)}/>
            </p>
        </div>
        <div className="form-group">
            <p>
                <label htmlFor="email" className="label2">ENTER E-MAIL ID </label>
                <i className="fas fa-envelope userfase1"></i>
                <input type="email" id="username" name="username" className="form-control form-signup" placeholder="enter email@gmail.com" style={{paddingLeft: '30px'}} autofocus="" required onBlur={(e) =>checkEmailExists(e.target)} onChange={(e) => setUsername(e.target.value)}/>
            </p>
        </div>
        <div className="form-group">
          <p>
            <label htmlFor="password" className="label2">Password:</label>
            <i className="fas fa-eye usereye1"></i>
            <input type="password" id="password" name="password" className="form-control" placeholder="Enter your password" autocomplete="off" value={password} onChange={(e) => setPassword(e.target.value)} required onBlur={clearPasswordError} />
            <a className="file fac" href="#" onClick={togglePasswordInput}></a>
            {/*<button className="file fac" onClick={togglePasswordInput}>
            <i className="fas fa-eye" style={{ position: 'absolute', left: '390px', top: '325px', color: 'black' }}></i></button>*/}
            </p>
          <p>
            <label htmlFor="confirm_password" className="label2">Confirm Password</label>
            {/*<input type="password" id="confirm_password" className="form-control" name="confirm_password" placeholder="Confirm password" defaultValue={confirmPassword} onKeyUp={(e) => check(e.target)} onChange={(e) => setConfirmPassword(e.target.value)} autoComplete="off" required/>*/}
            <input type="password" id="confirm_password" className="form-control" name="confirm_password" placeholder="Confirm password" defaultValue={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} autoComplete="off" required onBlur={clearPasswordError}/>
            <span style={{color:"red"}} className="errormessage">{passworderror}</span>
          </p>
          </div>
          <div className="checkbox">
          <span id="alert" className="check">{setError}</span>
          <input type="checkbox" className="form-controle1" autofocus="" required />
          <span className="remember rememberes-1">I agree with the User terms and privacy policy</span>
        </div>
        <div>
            {/*<error id="alert"></error>*/}
            <p>{error && <span className="error-message1">{error}</span>}
            {message && <span className="success-message1">{message}</span>}</p>
            <button type="submit" id="signup">SIGN UP</button>
        </div>
        <div className="form-group">
        <div className="signupaccounts">
          <p>
            Already have an account?{" "}
            <Link to="/login" className="signuphere">
              Login here
            </Link>
          </p>
        </div>
      </div>
      </form>
      </div>
      </div>
      <img className="huebitsimgses" src={behaves} alt=""/>
      </div>
      </div>
  );
};

export default Signup;




/*import React, { useState } from "react";
import axios from 'axios';
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import "./Register.css";


function Signup(){
  const [name, setName] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  //const [,setLoading] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [passworderror, setpasswordError] = useState(null);
  const [error, setError] = useState(null);
  const [message, setMessage] = useState(null);

  const navigate = useNavigate();


  const handleOnChange = (e) => {
    const { name, value } = e.target;

    // Update state based on the input field name
    if (name === 'name') setName(value);
    else if (name === 'username') setUsername(value);
    else if (name === 'password') setPassword(value);
    else if (name === 'confirmPassword') setConfirmPassword(value);
  };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError(null);
        setIsLoading(true);
      // Perform additional password strength checks
    // (you can customize this logic based on your requirements)
    const regExspecialChars = /^(?=.*\d)(?=.*[A-Z])(?=(.*\w){2})(?=.*[a-z])(?!.*\s).{8,}$/;
    if (password === "" || password === null) {
        setpasswordError("Password should not be blank");
    } else if (password.length < 8) {
        setpasswordError("Password should be more than 8 characters");
    } else if (!regExspecialChars.test(password)) {
        setpasswordError("Password should contain at least 1 digit, 2 special characters, and 1 lower and upper letters");
    } else if(password !== confirmPassword){
      setpasswordError("Confirm password does not match");
    } else { 
      document.getElementById("alert").innerText = "";
      //error

        /*try{
            const response = await axios.post('http://localhost:5000/', {name,username, password,confirmPassword});
            console.log('Registration response:', response.data);
            setMessage("Registration Successful");
            setTimeout(() => {
            navigate('/login');
          }, 2000);
        } catch (error) {
            if (error.response) {
                setError(error.response.data.error);
            } else {
                console.error('An unexpected error occurred:', error);
            }
        }finally{
            setLoading(false);
        }
      }//error
    };*/
    /*try {
      const response = await axios.post('http://localhost:5000/api/', { name, username, password, confirmPassword });

      if (response.data.success) {
        setMessage(response.data.message);
        setIsLoading(false);
        setName("");
        setUsername("");
        setPassword("");
        setConfirmPassword("");
        setTimeout(() => {
          navigate('/api/login');
        }, 2000);
      }
    } catch (error) {
      if (error.response) {
        setError(error.response.data.error);
      } else {
        console.error('An unexpected error occurred:', error);
      }
    } finally {
      isLoading(false);
    }
  }
};

    //google
    const loginwithgoogle = ()=>{
      window.open("http://localhost:5000/auth/google/server","_self")
    }

  const togglePasswordInput = () => {
    const passwordInput = document.getElementById("password");
    const icon = document.querySelector(".fac i");

    if (passwordInput.type === "password") {
      passwordInput.type = "text";
      icon.classList.remove("fa-eye");
      icon.classList.add("fa-eye-slash");
    } else {
      passwordInput.type = "password";
      icon.classList.remove("fa-eye-slash");
      icon.classList.add("fa-eye");
    }
  };

  const checkEmailExists = () => {

  };
  const clearPasswordError = () => {
    setpasswordError(null);
  };

  return (
    <div>
    <div>
      
      <h1 className="center">Registration</h1>
      <div>
        <div className="center1">
                <span className="span" id="currentTime"></span>
                <h1 className="register">Complete your registration</h1>
                <form
                  action="/signup"
                  method="POST"
                  id="lable"
                  onSubmit={(e) => handleSubmit(e)}
                >
                  <div className="form-group">
                                    <p>
                                        <label htmlFor="name" className="label2">Full NAME<span> *</span></label>
                                        <i className="fas fa-user" style={{position:'absolute', left: '605px', top:'214px', color:'black'}}></i>
                                        <input type="text" name="name" id="name" className="form-control" placeholder="enter first name" autoFocus="" required style={{paddingLeft: '30px'}} handleOnChange={(e) => setName(e.target.value)} />
                                    </p>
                                </div>
                                <div className="form-group">
                                    <p>
                                        <label htmlFor="email" className="label2">ENTER E-MAIL ID </label>
                                        <i className="fas fa-envelope" style={{position: 'absolute', left:'605px',top:'295px',color:'black'}}></i>
                                        <input type="email" id="username" name="username" className="form-control" placeholder="enter email@gmail.com" style={{paddingLeft: '30px'}} autofocus="" required onBlur={(e) =>checkEmailExists(e.target)} onChange={(e) => setUsername(e.target.value)}/>
                                    </p>
                                </div>
                                <div className="form-group">
                                  <p>
                                        <label htmlFor="password" className="label2">Password:</label>
                                        <input type="password" id="password" name="password" className="form-control" placeholder="Enter your password" autocomplete="off" value={password} onChange={(e) => setPassword(e.target.value)} required onBlur={clearPasswordError} />
                                        <a className="file fac" href="#" onClick={togglePasswordInput}><i className="fas fa-eye" style={{position: 'absolute', left:'880px',top:'380px', color: 'black'}}></i></a>
                                        {/*<button className="file fac" onClick={togglePasswordInput}>
                                        <i className="fas fa-eye" style={{ position: 'absolute', left: '390px', top: '325px', color: 'black' }}></i>
                                      </button>*/
                                        /*</p>
                                      <p>
                                        <label htmlFor="confirm_password" className="label2">Confirm Password</label>
                                        {/*<input type="password" id="confirm_password" className="form-control" name="confirm_password" placeholder="Confirm password" defaultValue={confirmPassword} onKeyUp={(e) => check(e.target)} onChange={(e) => setConfirmPassword(e.target.value)} autoComplete="off" required/>*/
                                        /*<input type="password" id="confirm_password" className="form-control" name="confirm_password" placeholder="Confirm password" defaultValue={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} autoComplete="off" required onBlur={clearPasswordError}/>
                                        <span style={{color:"red"}} className="errormessage">{passworderror}</span>
                                        <error id="email-alert" className="errormessage"></error>
                                        </p>
                                </div>
                                <div className="checkboxs">
                                        <error id="alert"></error>
                                        <p className="checked">
                                        <input type="checkbox" className="form-controle" autoFocus="" required style={{position: 'absolute', left:'600px',top:'530px'}}  />
                                        <p className="check" style={{ paddingLeft: '620px',top: '20px'}} >I agree with the User terms and privacy policy</p>
                                        </p>
                                </div>
                                <div>
                                        {/*<error id="alert"></error>*/
                                        /*<p>{error && <span className="error-message1">{error}</span>}
                                        {message && <span className="success-message1">{message}</span>}</p>
                                        <button type="submit" id="signup">SIGN UP AND BROWSE JOBS</button>
                                        <p className="social">Sign up with your social profiles</p>
                                        {/*<button type="submit" id="signup" value="submit" disabled={loading}>{loading ? 'Signing in...' : 'SIGN Up'}</button><br/>
                                        <span className="social">Sign up with your social profiles</span>*/
                                /*</div>
                                </form>
                      <div className="linkedin">
                      <Link to="#" className="link" role="button" onClick={loginwithgoogle}>
                        <i className="fab fa-google"></i>
                      </Link>
                  <Link className="link" to="/linkedin" role="button">
                    <i className="fab fa-linkedin"></i>
                  </Link>
                </div>
                <br />
                <div className="form-group">
                  <div className="accounts">
                    <p>
                      Already have an account?{" "}
                      <Link to="/login" className="signuphere">
                        Login here
                      </Link>
                    </p>
                  </div>
                </div>
                </div>
                </div>
                </div>
                </div>
  );
};

export default Signup;*/











