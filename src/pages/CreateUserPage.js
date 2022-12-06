import React from "react";
import CreateUserForm from "../components/CreateUserForm";
import {Routes, Route, useNavigate} from 'react-router-dom';

function CreateUserPage(){
    const navigate = useNavigate();
    const navigateToLoginPage = () => {
        navigate('/');
    };
    return (
        <div className="page-wrapper create-page-wrapper">
            <div className="logo-wrapper">
                <h1 className="logo">Entry 🗝</h1>
            </div>
            <div className="page-contents">
                <div className="create-account-wrapper">
                    <h1>Create an Account</h1>
                    <CreateUserForm />
                </div>
                <button onClick={navigateToLoginPage} >Log In</button>
            </div>
        </div>
    );
}
export default CreateUserPage;