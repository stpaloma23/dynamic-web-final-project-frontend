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
import HomePage from './pages/HomePage';
import HowIsYourDayPage from './pages/HowIsYourDayPage';

const firebaseConfig = {
  apiKey: "AIzaSyCHq6B4sB0v7ulakdcXAdE9qiSo8oeKv7A",
  authDomain: "dynamic-web-final-9afbe.firebaseapp.com",
  projectId: "dynamic-web-final-9afbe",
  storageBucket: "dynamic-web-final-9afbe.appspot.com",
  messagingSenderId: "945215548119",
  appId: "1:945215548119:web:b849e190ff814cf4bf9e92"
};

function App() {
  const [appInitialized, setAppInitialized] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userInformation, setUserInformation] = useState({});

  useEffect(() => {
    initializeApp(firebaseConfig);
    setAppInitialized(true)
  },[])

  useEffect(() => {
    if (appInitialized) {
      const auth = getAuth();
      onAuthStateChanged(auth, (user) => {
        if (user) {
          setUserInformation(user);
          setIsLoggedIn(true);
        } else {
          setUserInformation({});
          setIsLoggedIn(false);
        }
        setIsLoading(false);
      });
    }
  }, [appInitialized]);

  const router = createBrowserRouter([
    {
      path: "/",
      element: <LoginPage 
        isLoggedIn={isLoggedIn}
        setIsLoggedIn={setIsLoggedIn}
        setUserInformation={setUserInformation}
      />,
    },
    {
      path: "/home",
      element: <HomePage 
        userInformation={userInformation}
        isLoggedIn={isLoggedIn}
        setIsLoggedIn={setIsLoggedIn}
        setUserInformation={setUserInformation}
      />,
    },
    {
      path: "/my-profile",
      element: <UserProfilePage 
        isLoading={isLoading}
        userInformation={userInformation}
        isLoggedIn={isLoggedIn}
        setIsLoggedIn={setIsLoggedIn}
        setUserInformation={setUserInformation}
      />,
    },
    {
      path: "/create",
      element:
        <CreateUserPage 
          isLoggedIn={isLoggedIn}
          setIsLoggedIn={setIsLoggedIn}
          setUserInformation={setUserInformation}
        />,
    },
    {
      path: "/entry",
      element:
        <HowIsYourDayPage />,
    },
  ]);
  
  
  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
