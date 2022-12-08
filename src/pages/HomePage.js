import Header from "../components/Header";
import React, { useEffect, useCallback, useState } from "react";
import {useNavigate} from 'react-router-dom';
import HomePageContents from "../components/HomePageContents";
import {getFireStore} from "firebase/firestore"
function HomePage({userInformation, isLoggedIn, setIsLoggedIn, setUserInformation}){
    const navigate = useNavigate();

    useEffect(()=>{
        if (!isLoggedIn) navigate("/");
    })
    return (
        <div className="page-wrapper home-page-wrapper">
            <Header 
                isLoggedIn={isLoggedIn}
                setIsLoggedIn={setIsLoggedIn}
                userInformation={userInformation}
                setUserInformation={setUserInformation}
            />
            <HomePageContents/>
        </div>
    );
}
export default HomePage;

/* 
questions: 
1. my entry page should be where the firebase work is done? 
2. the home page will be reading from the firebase? 
3. what was the :id thing you did 
4. to make the cards autopopulate -> https://github.com/stpaloma23/dynamic-web-exercise-two/blob/main/src/pages/list.js
5. does thhis method also apply if you wanted to have a profile photo 
 */