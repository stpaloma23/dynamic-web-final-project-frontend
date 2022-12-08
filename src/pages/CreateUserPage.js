import React, { useEffect, useCallback, useState } from "react";
import CreateUserForm from "../components/CreateUserForm";
import {useNavigate} from 'react-router-dom';
import { getAuth, createUserWithEmailAndPassword, updateProfile } from "firebase/auth"

function CreateUserPage({setIsLoggedIn, setUserInformation, isLoggedIn}){
    const [errors, setErrors] = useState();
    const navigate = useNavigate();
    const navigateToLoginPage = () => {
        navigate('/');
    };

    useEffect(()=>{
        if (isLoggedIn) navigate("/home");
    })
    const createUser = useCallback (
        (e) => {
            e.preventDefault();

            const email = e.currentTarget.email.value;
            const password = e.currentTarget.password.value;
            const displayName = e.currentTarget.displayName.value;

            const auth = getAuth();

            createUserWithEmailAndPassword(auth, email, password)
                .then((userCredential) => {
                    const user = userCredential.user;
                    setIsLoggedIn(true)

                    setErrors()

                    updateProfile (user, { displayName: displayName })
                        .then(() => {
                            setUserInformation({
                                email: user.email,
                                displayName: displayName,
                                uid: user.uid,
                                accessToken: user.accessToken,
                            })
                        })
                        .catch((error) => {
                            const errorCode = errors.code;
                            const errorMessage = errors.message;
                            console.warn({ errors, errorCode, errorMessage})
                            setErrors(errorMessage);
                        })
                })
                .catch((errors) => {
                    const errorCode = errors.code;
                    const errorMessage = errors.message;
                    console.warn({ errors, errorCode, errorMessage})
                    setErrors(errorMessage);
                });
        },
        [setErrors, setIsLoggedIn, setUserInformation]
    );
    return (
        <div className="page-wrapper create-page-wrapper">
            <div className="logo-wrapper">
                <h1 className="logo">Entry 🗝</h1>
            </div>
            <div className="page-contents">
                <div className="create-account-wrapper">
                    <h1>Create an Account</h1>
                    <CreateUserForm 
                        createUser={createUser}
                    />
                </div>
                <button onClick={navigateToLoginPage}>Log In</button>
            </div>
        </div>
    );
}
export default CreateUserPage;