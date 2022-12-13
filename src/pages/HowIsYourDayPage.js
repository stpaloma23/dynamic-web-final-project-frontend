import React, {useCallback,useEffect, useState} from "react";
import { useNavigate} from 'react-router-dom';
import Feelings from "../components/Feelings";
import { addDoc, collection, getFirestore } from "firebase/firestore";
// capture existing user id
function HowIsYourDayPage({app, userInformation}){
    const [postSuccessful, setPostSuccessful] = useState(false);
    const [feeling, setFeeling] = useState();
    const navigate = useNavigate()
    const today = new Date().toLocaleDateString()
    const navigateToHomePage = () => {
        navigate('/home');
    };
    useEffect(()=>{
        if (postSuccessful) navigate("/home");
    })
    console.log(feeling);
    const createPost = useCallback( async (e) => {
        e.preventDefault();
        const db = getFirestore(app);
        const entry = e.currentTarget.blogPost.value;
        const username = userInformation.displayName
        const uid = userInformation.uid
        try {
            const docRef = await addDoc(collection(db, "posts"), {
                date: today,
                description: entry,
                mood: feeling,
                userId: uid,
                username:username,
            });
            console.log("document written with id: ", docRef.id);
            setPostSuccessful(true);
        } catch(e) {
            console.error("Error adding document: ", e)
        }
    }, [app, userInformation, feeling, today]);
    
    return (
        <form onSubmit={(e) => createPost(e)}>
        <div className="page-wrapper create-entry-wrapper">
            <div className="create-entry-content-wrapper">
                <div className="logo-wrapper">
                    <h1 className="logo">Entry 🗝</h1>
                </div>
                <div className="entry-page-contents">
                    <div className="journal-entry-wrapper">
                        <h1>How was your day?</h1>
                        <div className="feelings-wrapper">
                            <Feelings 
                                setFeeling={setFeeling}
                            />
                            <label htmlFor="blogPost"><h4>Tell us about it {today}</h4></label>
                            <textarea type="text" name="blogPost" className="blog-post"/>
                            <div className="submit-or-close-buttons">
                                <button className="make-entry-button" type="submit">Add Your Entry</button>
                                <button className="close-entry-button" onClick={navigateToHomePage}>close</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </form>
    );
}
export default HowIsYourDayPage;