import Header from "../components/Header";
import React, { useEffect } from "react";
import {useNavigate} from 'react-router-dom';
import HomePageContents from "../components/HomePageContents";
function HomePage({app, userInformation, isLoggedIn, setIsLoggedIn, setUserInformation, setPostData, postData}){
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
            <HomePageContents
                app={app}
                postData={postData}
                setPostData={setPostData}
            />
        </div>
    );
}
export default HomePage;
