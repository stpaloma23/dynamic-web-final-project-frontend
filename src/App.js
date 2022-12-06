import logo from './logo.svg';
import './App.css';
import {
  createBrowserRouter,
  RouterProvider
} from "react-router-dom";
import { useEffect, useState } from 'react';
import {initializeApp} from "firebase/app";
import {getAuth, onAuthStateChanged} from "firebase/auth";
import CreateUserPage from './pages/CreateUserPage';
import UserProfilePage from './pages/UserProfilePage';
import LoginPage from './pages/LoginPage';

const firebaseConfig = {
  apiKey: "AIzaSyDkI8qRPvQPYjW4imjUv3ExXdHltWqjnU0",
  authDomain: "dynamic-web-final-13448.firebaseapp.com",
  projectId: "dynamic-web-final-13448",
  storageBucket: "dynamic-web-final-13448.appspot.com",
  messagingSenderId: "921662225577",
  appId: "1:921662225577:web:2cd029bc535a278d21bdb8"
};

function App() {
  const [appInitialized, setAppInitialized] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userInformation, setUserinformation] = useState({});

  const router = createBrowserRouter([
    {
      path: "/",
      element: <UserProfilePage />,
    },
    {
      path: "/login",
      element: <LoginPage />,
    },
    {
      path: "/create",
      element:( 
        <CreateUserPage 
          isLoggedIn={isLoggedIn}
          setIsLoggedIn={setIsLoggedIn} 
          setUserInformation={setUserinformation}
        />),
    },
  ]);

  useEffect(() => {
    if(appInitialized){
      const auth = getAuth();
      onAuthStateChanged(auth, (user) => {
        if(user) {
          // user is signed in, see docs for list of availible properties 
          setUserinformation(user);
          setIsLoggedIn(true);
        } else {
          // user is signed out
          setUserinformation({});
          setIsLoggedIn(false)
        }
        // whenever state chanes setloading to false
        setIsLoading(false);
      })
    }
  }, [appInitialized]);
  return (
    <div className="App">
      
    </div>
  );
}

export default App;
