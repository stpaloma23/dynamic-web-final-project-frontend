import Header from "../components/Header";
import React from 'react';
import HomePageContents from "../components/HomePageContents";
function HomePage({userInformation, isLoggedIn, setIsLoggedIn, setUserInformation}){
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