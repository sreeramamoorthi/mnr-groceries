import React, {useRef} from "react";
 
export const Reference = () => {
    const inputRef = useRef();
    const boxref = useRef();
    const buttontag =() => {
        inputRef.current.focus();
    }
    const changeColor = () => {
        boxref.current.style.backgroundColor = "red";
    }
    return (
        // <div>
        //     <input type="text" ref={inputRef} />
        //     <button onClick={buttontag}>Click</button>
        // </div>
        <div>
            <input ref ={boxref} style ={{width hei}} />
        </div>
    )
}