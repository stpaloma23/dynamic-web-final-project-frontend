import React from "react";
import CreateUserForm from "../components/CreateUserForm";
import {Routes, Route, useNavigate} from 'react-router-dom';
import Feelings from "../components/Feelings";

function HowIsYourDayPage(){
    return (
        <div className="page-wrapper create-entry-wrapper">
            <div className="logo-wrapper">
                <h1 className="logo">Entry 🗝</h1>
            </div>
            <div className="entry-page-contents">
                <div className="journal-entry-wrapper">
                    <h1>How was your day?</h1>
                    <div className="feelings-wrapper">
                        <Feelings/>
                        <h4>Tell us about it</h4>
                        <input type="text" name="blogPost" className="blog-post"/>
                        <button className="make-entry-button">Add Your Entry</button>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default HowIsYourDayPage;