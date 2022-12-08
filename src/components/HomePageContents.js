import React from 'react';
import PostCard from './PostCard';

function HomePageContents({}){
    return (
        <div className="home-page-contents-wrapper">
            <h1>Home page contents </h1>
            <div className="home-page-feed">
                <PostCard/>
                <PostCard/>
                <PostCard/>
            </div>
        </div>
    );
};
export default HomePageContents;