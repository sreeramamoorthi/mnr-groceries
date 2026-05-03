import React,{ useState ,useCallback} from "react"

export const Callback =() =>{
    const [count,setCount] =useState(0)
    const [text,setText] = useState('');

    const  increment =useCallback(()=>{
        setCount
    }
    )

}