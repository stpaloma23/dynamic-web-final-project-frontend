import React from 'react';

function PostCard({date, description,mood,userId,username}){
    const className = "circle "+ mood;
    return (
        <div className="post-card">
            <p>{username} posted on {date}</p>
            <div className='post-card-emotion'>
                <div className={className}></div>
                <p><strong>{mood}</strong></p>
            </div>
            <div className='post-card-description'>
                <p>{description}</p>
            </div>
        </div>
    );
}
export default PostCard;