import React, { useRef,useState } from "react";

export const counterref = () => {
    const [, setCount] = useState(10);
    const increment = () => {
        counterref.current ++;
        setCount(prevCount => prevCount + 1);
    }
    return (
        <div>
            <button onClick={increment}>Increment</button>
            <button onClick={decrement}>Decrement</button>

        </div>
    );
};