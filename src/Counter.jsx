import React,{Children, useContext} from "react";

export const Counter = () => ({Children}) => {

    const [count,setCount] = useContext(0);
    const increment = () => setCount(prev + 1);
    const decreament =  () => setCount(prev - 1);
    return (
        <div>
            <CounterContext.Provider value={[count,increment,decreament]}>
                {Children}
            </CounterContext.Provider>
        </div>
    )
}

