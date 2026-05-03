import React, { useState } from 'react';
import './App.css';
import Count from './count';


function inputCharacterCounter() {
    const [inputValue, setinputValue] = useState('');

    const Change = (event) => {
        setinputValue(event.target.value);
    };

    return (
        <div className="App">
            <h1>Character Counter</h1>
            <input type="text" placeholder="Type here..." onChange={Change} />
            <p>Character Count: {inputValue.length}</p>
        </div>
    );
}       
export default inputCharacterCounter;