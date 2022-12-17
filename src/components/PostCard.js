import React from 'react';

function PostCard({date, description,mood,userId,username}){
    const className = "circle "+ mood;
    return (
        <div className="post-card">
            <p><strong>{username} posted on {date}</strong></p>
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