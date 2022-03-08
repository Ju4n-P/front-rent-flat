import React from 'react';
import { useState } from "react"

const Toggle = () => {
    const [toggle, setToggle] = useState(true);

    const changeState = () => {
        setToggle(!toggle)
    }
    if(toggle){
        return (
            <div className="Toggle">
                <h3>Hello from toggle component</h3>
                <p>Le state est true</p>
                <button onClick={changeState}>Change state</button>
            </div>
        );
    } else if(toggle == false){
        return (
            <div className="Toggle">
                <h3>Hello from toggle component</h3>
                <p>Le state est false</p>
                <button onClick={changeState}>Change state</button>
            </div>
        );
    }
};

export default Toggle;