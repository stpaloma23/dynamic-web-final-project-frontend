import {useNavigate} from 'react-router-dom';
import React, { useEffect, useCallback, useState } from "react";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth"
import LoginForm from "../components/LoginForm";

function LoginPage({ isLoggedIn, setIsLoggedIn, setUserInformation }){
    const navigate = useNavigate();
    const [errors, setErrors] = useState();

    const navigateToCreatePage = () => {
        navigate('/create');
    };
    const loginUser = useCallback((e) => {
        e.preventDefault();
        const email = e.currentTarget.email.value;
        const password = e.currentTarget.password.value;
        const auth = getAuth();
        signInWithEmailAndPassword(auth, email, password).then((userCredential) => {
            const user = userCredential.user;
            setIsLoggedIn(true)
            setUserInformation({
                email: user.email,
                displayName: user.displayName,
                uid: user.uid,
                accessToken: user.accessToken,
            });
        })
        .catch((errors) => {
            const errorCode = errors.code;
            const errorMessage = errors.message;
            console.warn({ errors, errorCode, errorMessage})
            setErrors(errorMessage);
        }); 
    }, [setErrors, setIsLoggedIn, setUserInformation])

    return (
        <div className="page-wrapper login-page-wrapper">
            <div className="logo-wrapper">
                <h1 className="logo">Entry 🗝</h1>
            </div>
            <div className="login-page-contents">
                <div className="login-wrapper">
                    <h1>Login Page</h1>
                    <p>{errors}</p>
                    <LoginForm 
                        loginUser={loginUser}
                    />
                </div>
                <button onClick={navigateToCreatePage} >I'm New Here</button>
            </div>
        </div>
    );
}
export default LoginPage