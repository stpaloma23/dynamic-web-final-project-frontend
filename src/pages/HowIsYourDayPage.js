import React from "react";
import CreateUserForm from "../components/CreateUserForm";
import {Routes, Route, useNavigate} from 'react-router-dom';

function HowIsYourDayPage(){
    // const navigate = useNavigate();
    // const navigateToLoginPage = () => {
    //     navigate('/');
    // };
    return (
        <div className="page-wrapper create-page-wrapper">
            <div className="logo-wrapper">
                <h1 className="logo">Entry 🗝</h1>
            </div>
            <div className="page-contents">
                <div className="journal-entry-wrapper">
                    <h1>How was your day?</h1>
                </div>
                {/* <button onClick={navigateToLoginPage} >Log In</button> */}
            </div>
        </div>
    );
}
export default HowIsYourDayPage;