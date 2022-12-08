import React from 'react';
import awesome from "../feelings/awesome.png"
import awful from "../feelings/awful.png"
import bad from "../feelings/bad.png"
import good from "../feelings/good.png"
import okay from "../feelings/okay.png"


function Feelings({}){
    return (
        <div className="feelings-contents">
            <div className='emotion'>
                <img className='circle' src={awesome}/>
                <p>Awesome</p>
            </div>
            <div className='emotion'>
                <img className='circle' src={good}/>
                <p>Good</p>
            </div>
            <div className='emotion'>
                <img className='circle' src={okay}/>
                <p>Okay</p>
            </div>
            <div className='emotion'>
                <img className='circle' src={bad}/>
                <p>Bad</p>
            </div>
            <div className='emotion'>
                <img className='circle' src={awful}/>
                <p>Awful</p>
            </div>
        </div>
    );
};
export default Feelings;