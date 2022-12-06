import React from 'react';

function Feelings({}){
    return (
        <div className="feelings-contents">
            <div className='emotion'>
                <button className='circle awesome'></button>
                <p>Awesome</p>
            </div>
            <div className='emotion'>
                <button className='circle good'></button>
                <p>Good</p>
            </div>
            <div className='emotion'>
                <button className='circle okay'></button>
                <p>Okay</p>
            </div>
            <div className='emotion'>
                <button className='circle bad'></button>
                <p>Bad</p>
            </div>
            <div className='emotion'>
                <button className='circle awful'></button>
                <p>Awful</p>
            </div>
        </div>
    );
};
export default Feelings;