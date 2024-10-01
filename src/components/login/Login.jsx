import React from 'react';
import { useParams } from 'react-router-dom';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import './Login.css';

const Login = () => {
  const { userType } = useParams();
  const navigate = useNavigate();
  const handleSubmit = (event) => {
    event.preventDefault();
    
    // Check if the user type is 'partner-ngo'
    if (userType === 'partner-ngo' ) {
      // Navigate to the registration form
      navigate('/choice');
    } 
    if(userType==='volunteer'){
      navigate('/students')
    }
    if(userType==='foundation-officer'){
      navigate('/admin')
    }
    else {
      // Handle other user types or show an error message
      alert('Login successful');
    }
  };

  return (
    <div className="login-container" >
      <h2>Login as {userType}</h2>
      <form className="login-form" onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="id">ID:</label>
          <input type="text" id="id" name="id" required />
        </div>
        <div className="form-group font-Aleo">
          <label htmlFor="password">Password:</label>
          <input type="password" id="password" name="password" required />
        </div>
        <button type="submit" >Login</button>
      </form>
    </div>
  );
};

export default Login;
