interface App02Props{
    nompays:string
    capitale:string
    drapeau:string
    population:string
}

export default function country(props:App02Props){
    return(
        <div>
            nom: {props.nompays}   <br />
            capitale:{props.capitale} <br />
            drapeau:{props.drapeau} <br />
            population:{props.population} <br />
            <hr />
        </div>
    )
}