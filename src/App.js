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
  const [appInitialized, setAppInitialized] = useState();
  const [isLoading, setIsLoading] = useState(true);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userInformation, setUserInformation] = useState({});
  const [postData, setPostData] = useState([]);
  const [moods, setMoods] = useState({"awesome":0, "good":0, "okay": 0, "bad":0, "awful":0});

  useEffect(() => {
    const app = initializeApp(firebaseConfig);
    setAppInitialized(app)
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
        app={appInitialized}
        userInformation={userInformation}
        isLoggedIn={isLoggedIn}
        setIsLoggedIn={setIsLoggedIn}
        setUserInformation={setUserInformation}
        setPostData={setPostData}
        postData={postData}
        setMoods={setMoods}
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
      path: "/my-profile",
      element: <UserProfilePage 
        isLoading={isLoading}
        userInformation={userInformation}
        isLoggedIn={isLoggedIn}
        setIsLoggedIn={setIsLoggedIn}
        setUserInformation={setUserInformation}
        moods={moods}
      />,
    },
    {
      path: "/entry",
      element:
        <HowIsYourDayPage 
          app={initializeApp}
          userInformation={userInformation}
        />,
    },
  ]);
  
  
  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
