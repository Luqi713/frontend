import React, { useState } from 'react';
import Logo from "../Assets/Logo.jpg"
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const Login = () => {
    const Navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSignIn = async (e) => {
    e.preventDefault(); // Prevent form submission
    try {
        const body = {
            email: email,
            Password : password
        }
        const user = await axios.post("http://127.0.0.1:3001/signin", body)
        if(user.status === 200){
            localStorage.setItem("token", user.data.Token);
            localStorage.setItem("userid", user.data.id);
            Navigate("/");
        }else{
            window.location.reload();
        }
    } catch (error) {
        console.log(error);
    }
  };

  return (
    <div className="login-container">
      <div className="login-content">
        <img src={Logo} alt="Site Logo" className="logo" />
        <form className="login-form" onSubmit={handleSignIn}>
          <input
            type="email"
            placeholder="Email"
            className="input-field"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            placeholder="Password"
            className="input-field"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button type="submit" className="sign-in-button">Sign In</button>
        </form>
        <p className="already-have-account-text">
          Don't have an account? <button className="sign-up-button" onClick={()=>{Navigate("/signup")}}>Sign Up</button>
        </p>
      </div>
    </div>
  );
};

export default Login;
