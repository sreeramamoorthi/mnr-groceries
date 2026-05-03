import { useContext, useState } from "react";
import { useEffect } from "react";


export default function Cardm(){
  const user=useContext(useContext)
  return( 
    <div>
      <h1>name:{user.name}</h1>
      <h1>email:{user.email}</h1>
      <h1>age:{user.age}</h1>
    </div>
  )
}


    

// function Cardm({image,name,detail,age,goal,da,id}){
  

//     let [playerStatus,avilable]=useState( "false");
//     function Clic(Goal){
        
//         playerStatus=true;
//         avilable("true");
//     }
//      useEffect(()=>{
//         console.log("player status changed");
//         confirm("delete player");
        
//    })
   
//     return(
//  <div className="con">
 
//    <h3>{name}</h3>
//    <img src={image} alt={name}/>
//    <p>{detail}</p>
//    <p>{age}</p>
//    <p>{goal}</p>
//    <button onClick={()=>Clic(20)}>Click</button>
//    <button onClick={()=>{da(id)}}>delete</button>
//    <p>{playerStatus}</p>
     
//  </div>

//     );

// }

// export default Cardm;
