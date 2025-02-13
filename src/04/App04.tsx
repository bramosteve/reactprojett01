import { useState } from "react";


export default function AppO4(){
    const [Compteur,setCompteur]=useState(0);
   

    function augmenter(){
       setCompteur(Compteur+1);
    }
    
    function Decrementer(){
        setCompteur(Compteur-1);
     }
    return(
        <div>
            <button onClick={augmenter}>Augmenter</button>
            <button onClick={Decrementer}>Decrementer</button>
            <div>Compteur:{Compteur} </div>
        </div>
    )
}