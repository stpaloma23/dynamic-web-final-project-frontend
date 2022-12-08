import { getAuth, signOut } from 'firebase/auth';
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
                <p>Hi {displayName}</p>
                <a href="/my-profile">My Profile</a>
                <a href="/entry"> Write an Entry</a>
                {isLoggedIn && <a onClick={()=>logout()}>Logout</a>}
            </nav>
        </header>
    );
};
export default Header;