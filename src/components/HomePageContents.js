import React, { useEffect } from 'react';
import PostCard from './PostCard';
import {getFirestore, collection, getDocs, where, query} from "firebase/firestore"

const queryData = async(app, userInformation, setPostData, setMoods)=>{
    if (!app) return [];
    const db = getFirestore(app);
    const querySnapshot = await getDocs(query(collection(db, "posts"), where("userId", "==", userInformation.uid)));
    const data = [];
    var dict = {"awesome":0, "good":0, "okay": 0, "bad":0, "awful":0};
    querySnapshot.forEach((doc) => {
        data.push(doc.data());
    });
    setPostData(data);
    data.map((post)=>(
        dict[post.mood] +=1
    ));
    setMoods(dict);
    return data
};
function HomePageContents({app, postData, setPostData, userInformation, setMoods}){
    useEffect(() => {
        if(!app) return;
        queryData(app, userInformation, setPostData, setMoods).then(setPostData);
    }, [app, setPostData, userInformation, setMoods])

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