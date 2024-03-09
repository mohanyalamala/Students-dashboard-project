import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from 'axios';
import './ForgotPassword.css';
import {Link} from "react-router-dom";

function ForgotPassword() {
  const navigate = useNavigate();
  const [username, setUsername] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);


  const submitHandler = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:8000/forgot-password", { username });
      console.log('Response from server:', response.data);
  
      if (response.data.success) {
        console.log('Password recovery successful');
        navigate("/login", { state: { id: username } });
      } else {
        setError("An unexpected error occurred");
      }
    } catch (error) {
      console.error('Error during password recovery:', error);
      setError("Invalid credentials");
    }
  }

  return (
      <div className="recoverpassword">
        <h1 className="recoveres">Recover-Password</h1>
        <div className="center1 send">
                  <form id="lable" onSubmit={submitHandler}>
                  <div className="form-group">
                      <label htmlFor="email" className="label1">Enter E-Mail Id</label>
                      <input type="email" className="form-control" id="username" name="username" placeholder="Email address" autoFocus="off" required onChange={(e) => setUsername(e.target.value)} />
                    </div>
                    <div className="form-group">
                      <p>
                        <button type="submit" id="signin" value="submit" disabled={loading}>{loading ? 'Send...' : 'SEND'}</button><br/>
                      </p>
                    </div>
                  </form>
                  <div className="form-group">
                      <div className="account">
                        <p>
                          <Link to="/login" className="loginhere">
                            Login here
                          </Link>
                        </p>
                      </div>
                    </div>
                </div>
              </div>
  );
};

export default ForgotPassword;