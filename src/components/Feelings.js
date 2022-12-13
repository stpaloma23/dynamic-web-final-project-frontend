import React, { useState } from 'react';

function Feelings({setFeeling}){
    const [border, setBorder] = useState(false);
    function good() {
        setBorder(true);
        setFeeling("good");
    }
    function awesome() {
        setBorder(true);
        setFeeling("awesome");
    }
    function bad() {
        setBorder(true);
        setFeeling("bad");
    }
    function okay() {
        setBorder(true);
        setFeeling("okay");
    }
    function awful() {;
        setBorder(true)
        setFeeling("awful");
    }
    
    return (
        <div className="feelings-contents">
            <div className='emotion-button' name="awesomeDay">
                <button className={border ? "emotion-button-visited emotion awesome" : 'emotion awesome'} onClick={awesome} ></button>
                <p>Awesome</p>
            </div>
            <div className='emotion-button' name="goodDay">
                <button className={border ? "emotion-button-visited emotion good" : 'emotion good'} onClick={good}></button>
                <p>Good</p>
            </div>
            <div className='emotion-button' name="okayDay">
                <button className={border ? "emotion-button-visited emotion okay" : 'emotion okay'} onClick={okay}></button>
                <p>Okay</p>
            </div>
            <div className='emotion-button' name="badDay">
                <button className={border ? "emotion-button-visited emotion bad" : 'emotion bad'} onClick={bad}></button>
                <p>Bad</p>
            </div>
            <div className='emotion-button' name="awfulDay">
                <button className={border ? "emotion-button-visited emotion awful" : 'emotion awful'} onClick={awful}></button>
                <p>Awful</p>
            </div>
        </div>
    );
};
export default Feelings;