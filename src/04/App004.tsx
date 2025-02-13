import { useState } from "react";


export default function AppO04(){
    const [flag,setFlag]=useState("/img/monde.png");
   

    function setsango(){
       setFlag("/img/monde.png")
    }
    
    function setfrancais(){
        setFlag("/img/france.png")
     }
    return(
        <div>
            <button onClick={setsango}>sango</button>
            <button onClick={setfrancais}>francais</button>
            <p>
                <img src={flag}  height={325} />
            </p>
          
        </div>
    )
}