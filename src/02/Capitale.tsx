interface App02Props{
    pays:string
    ville:string
}

export default function Capital(props:App02Props){
    return(
        <div>
            la capitale de {props.pays} est {props.ville}
        </div>
    )
}