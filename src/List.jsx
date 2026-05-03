import { useState } from "react";
import Cardm from "./Cardm";
import img from "../public/download.jpeg"
import imga from "../public/1.jpg"
import imgb from "../public/2.jpg"



function List(){
 
    
    const [playerList,setPlayer]=useState([
        {
       id:1, image:img,name:"Ronaldo",detail:"GOAT",goal:900

        },
        {
         id:2,image:imga,name:"messi",detail:"Alien",goal:800
        },
        {
        id:3,image:imgb,name:"Neymer",detail:"GOAT",goal:600
        }
    ]);
    // useEffect(()=>{
    //     confirm("delete player");
    // })
    
    function playerSet(id){
        let newPlayer=playerList.filter((ci)=>ci.id!=id)
        setPlayer(newPlayer);

    }

    
    playerList.sort((x,y)=>y.age-x.age)
    const list=playerList.map((li,index) => <Cardm key={index} image={li.image} name={li.name} detail={li.detail} age={li.age} Goal={li.goal} da={playerSet} id={li.id}/>

}

export default List();