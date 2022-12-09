import { getAuth, signOut } from 'firebase/auth';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faRightFromBracket, faPenToSquare, faUser, faLock} from "@fortawesome/free-solid-svg-icons";
import React from 'react';

function Header({isLoggedIn, setIsLoggedIn, userInformation, setUserInformation}){
    var displayName = "";
    console.log(userInformation); 
    if (isLoggedIn) {
        displayName = userInformation.displayName;
    }
    function logout() {
        const auth = getAuth()
        signOut(auth)
            .then(()=>{
                setUserInformation({})
                setIsLoggedIn(false)
            })
            .catch((error)=>{
                console.warn(error)
            })
    }
    return (
        <header>
            <h1 className='logo'>Entry🗝</h1>
            <nav>
                <p className='header-options'>Hi {displayName}</p>
                <div className='header-options'>
                    <FontAwesomeIcon icon={faLock} className="icons"/>
                    <a href='/home'>My Entries</a>
                </div>
                <div className='header-options'>
                    <FontAwesomeIcon icon={faUser} className="icons"/>
                    <a href="/my-profile">My Profile</a>
                </div>
                <div className='header-options'>
                    <FontAwesomeIcon icon={faPenToSquare} className="icons"/>
                    <a href="/entry"> Write an Entry</a>
                </div>
                <div className='header-options'>
                    <FontAwesomeIcon icon={faRightFromBracket} className="icons"/>
                    {isLoggedIn && <a onClick={()=>logout()}>Logout</a>}
                </div>
            </nav>
        </header>
    );
};
export default Header;