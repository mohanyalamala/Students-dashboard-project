import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from 'axios';
//import './ResetPassword.css';

function ResetPassword() {
  const navigate = useNavigate();
  const { id, token } = useParams();
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  useEffect(() => {
    const check = (elem) => {
      const passwordInput = document.getElementById("password");

      if (elem.value.length > 0) {
        if (elem.value !== passwordInput.value) {
          document.getElementById("alert").innerText =
            "Confirm password does not match";
        } else {
          document.getElementById("alert").innerText = "";
        }
      } else {
        document.getElementById("alert").innerText =
          "Please enter confirm password";
      }
    };

    // Attach the event listener after the component is mounted
    document.getElementById("confirm_password").addEventListener("keyup", (e) => check(e.target));

    // Cleanup the event listener when the component is unmounted
    return () => {
      document.getElementById("confirm_password").removeEventListener("keyup", (e) => check(e.target));
    };
  }, []); // The empty dependency array ensures that this effect runs only once after the initial render

  const submitHandler = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(`http://localhost:8000/reset-password/${id}/${token}`, { password });
      console.log('Response from server:', response.data);

      if (response.data.success) {
        console.log('Password recovery successful');
        navigate("/login", { state: { id: password } });
      } else {
        setError("An unexpected error occurred");
      }
    } catch (error) {
      console.error('Error during password recovery:', error);
      setError("Invalid credentials");
    }
  };

  return (
    <div>
                  <h1 className="recoveres">Reset Password</h1>
                  <form id="lable" onSubmit={submitHandler}>
                    <div className="form-group">
                      <label htmlFor="password" className="label1">New Password</label>
                      <input type="password" className="form-control" id="password" name="password" placeholder="Enter a New Password" autoFocus="" required onChange={(e) => setPassword(e.target.value)} />
                      <p>
                        <label htmlFor="confirm_password" className="label1">Confirm Password</label>
                        <input type="password" id="confirm_password" className="form-control" name="confirm_password" placeholder="Confirm password" defaultValue={confirmPassword} autoComplete="off" required/>
                      </p>
                      <p id="alert"></p>
                    </div>
                    <div className="form-group">
                      <p>
                      <button type="submit" id="signin" value="submit" disabled={loading}>{loading ? 'Update...' : 'UDATE'}</button><br/>
                      </p>
                    </div>
                  </form>
                </div>
  );
}

export default ResetPassword;