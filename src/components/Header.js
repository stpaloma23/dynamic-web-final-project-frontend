import React from 'react';

function Header({}){
    return (
        <header>
            <h1>Entry</h1>
            <nav>
                <a href="/">Login</a>
                <a href="/my-profile">My Profile</a>
                <a> Write an Entry</a>
                <a>Logout</a>
            </nav>
        </header>
    );
};
export default Header;