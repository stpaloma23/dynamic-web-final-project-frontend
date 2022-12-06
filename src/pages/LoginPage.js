import React from "react";
import LoginForm from "../components/LoginForm";
import {Routes, Route, useNavigate} from 'react-router-dom';

function LoginPage(){
    const navigate = useNavigate();

  const navigateToCreatePage = () => {
    navigate('/create');
  };
    return (
        <div className="page-wrapper login-page-wrapper">
            <div className="logo-wrapper">
                <h1 className="logo">Entry 🗝</h1>
            </div>
            <div className="login-page-contents">
                <div className="login-wrapper">
                    <h1>Login Page</h1>
                    <LoginForm />
                </div>
                <button onClick={navigateToCreatePage} >I'm New Here</button>
            </div>
        </div>
    );
}
export default LoginPage