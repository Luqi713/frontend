import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Logo from "../Assets/Logo.jpg"
const SignUp = () => {
    const Navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const handleSignUp = (e) => {
    e.preventDefault();
    console.log('Email:', email);
    console.log('Password:', password);
    console.log('Confirm Password:', confirmPassword);
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const toggleConfirmPasswordVisibility = () => {
    setShowConfirmPassword(!showConfirmPassword);
  };

  return (
    <div className="signup-container">
      <div className="signup-content">
        <img src={Logo} alt="Site Logo" className="logo" />
        <form className="signup-form" onSubmit={handleSignUp}>
          <input
            type="email"
            placeholder="Email"
            className="input-field"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <div className="password-field">
            <input
              type={showPassword ? "text" : "password"}
              placeholder="Password"
              className="input-field"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <button
              type="button"
              className="show-password-button"
              onClick={togglePasswordVisibility}
            >
              {showPassword ? "Hide" : "Show"}
            </button>
          </div>
          <div className="password-field">
            <input
              type={showConfirmPassword ? "text" : "password"}
              placeholder="Confirm Password"
              className="input-field"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
            <button
              type="button"
              className="show-password-button"
              onClick={toggleConfirmPasswordVisibility}
            >
              {showConfirmPassword ? "Hide" : "Show"}
            </button>
          </div>
          <button type="submit" className="sign-up-btn">Sign Up</button>
        </form>
        <p className="already-have-account-text">
          Already have an account? <button className="sign-in-btn" onClick={()=>{Navigate("/signin")}}>Sign In</button>
        </p>
      </div>
    </div>
  );
};

export default SignUp;
