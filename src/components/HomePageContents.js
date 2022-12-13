import React, { useEffect } from 'react';
import PostCard from './PostCard';
import {getFirestore, collection, getDocs, where, query} from "firebase/firestore"

const queryData = async(app, userInformation)=>{
    if (!app) return [];
    const db = getFirestore(app);
    const querySnapshot = await getDocs(query(collection(db, "posts"), where("userId", "==", userInformation.uid)));
    const data = [];
    querySnapshot.forEach((doc) => {
        data.push(doc.data());
    });
    return data
};
function HomePageContents({app, postData, setPostData, userInformation}){
    
    useEffect(() => {
        if(!app) return;
        queryData(app, userInformation).then(setPostData);
    }, [app, setPostData, userInformation])

    console.log({postData})
    return (
        <div className="home-page-contents-wrapper">
            <h1 className='my-entries-title'>My Entries </h1>
                {postData.map((post, i) => (
                    <div className="home-page-feed" key={i}>
                        <PostCard
                            date={post.date}
                            description={post.description}
                            mood={post.mood}
                            userId={post.userId}
                            username={post.username}
                        />
                    </div>
                ))}
            </div>
    );
};
export default HomePageContents;