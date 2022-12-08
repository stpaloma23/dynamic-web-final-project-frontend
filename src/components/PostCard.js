import React from 'react';

function PostCard(){
    return (
        <div className="post-card">
            <p>Insert Name posted on Date:</p>
            <div className='post-card-emotion'>
                <div className='circle awesome'></div>
                <p> corresponding emotion</p>
            </div>
            <div className='post-card-description'>
                <p>paragraph explaining how my day went</p>
            </div>
        </div>
    );
}
export default PostCard;