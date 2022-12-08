import React from 'react';
import {useNavigate} from 'react-router-dom';

function LoginForm({loginUser}) {
    const navigate = useNavigate();
    const navigateToHomePage = () => {
        navigate('/home');
    };
    // onClick={navigateToHomePage} 
    return (
        <form className='form-element' onSubmit={(e) =>loginUser(e)}>
            <label htmlFor="email">Email</label>
            <input type="text" name="email"/>

            <label htmlFor="password">Password</label>
            <input type="password" name="password"/>

            <button className="login-submit-btn" type="submit">Submit</button>
        </form>
    );
}

export default LoginForm;