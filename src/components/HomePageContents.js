import React, { useEffect } from 'react';
import PostCard from './PostCard';
import {getFirestore, collection, getDocs} from "firebase/firestore"

// 12 mins
const queryData = async(app)=>{
    if (!app) return [];
    const db = getFirestore(app);
    const querySnapshot = await getDocs(collection(db, "posts"));
    const data = [];
    querySnapshot.forEach((doc) => {
        data.push(doc.data());
    });
    return data
};
function HomePageContents({app, postData, setPostData}){
    
    useEffect(() => {
        if(!app) return;
        queryData(app).then(setPostData);
    }, [app, setPostData])

    console.log({postData})
    return (
        <div className="home-page-contents-wrapper">
            <h1 className='my-entries-title'>My Entries </h1>
            <div className="home-page-feed">
                {postData.map((post) => (
                    <PostCard
                        date={post.date}
                        description={post.description}
                        mood={post.mood}
                        userId={post.userId}
                        username={post.username}
                    />
                ))}
            </div>
        </div>
    );
};
export default HomePageContents;