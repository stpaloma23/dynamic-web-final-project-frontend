import React, {useState} from "react";
import CreateUserForm from "../components/CreateUserForm";
import {Routes, Route, useNavigate} from 'react-router-dom';
import Feelings from "../components/Feelings";

// capture existing user id
function HowIsYourDayPage(){
    const [postSuccessful, setPostSuccessful] = useState(false);
    const [feeling, setFeeling] = useState();
    const navigate = useNavigate()
    const navigateToHomePage = () => {
        navigate('/home');
    };
    console.log(feeling);
    return (
        <div className="page-wrapper create-entry-wrapper">
            <div className="create-entry-content-wrapper">
                <div className="logo-wrapper">
                    <h1 className="logo">Entry 🗝</h1>
                </div>
                <div className="entry-page-contents">
                    <div className="journal-entry-wrapper">
                        <h1>How was your day?</h1>
                        <div className="feelings-wrapper">
                            <Feelings 
                                setFeeling={setFeeling}
                            />
                            <label htmlFor="blogPost"><h4>Tell us about it</h4></label>
                            <textarea type="text" name="blogPost" className="blog-post"/>
                            <div className="submit-or-close-buttons">
                                <button className="make-entry-button">Add Your Entry</button>
                                <button className="close-entry-button" onClick={navigateToHomePage}>close</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default HowIsYourDayPage;