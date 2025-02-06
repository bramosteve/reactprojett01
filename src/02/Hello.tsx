interface App02Props{
    lang:string
    name:string
   
   
}

export default function Hello(props:App02Props){

    //const {lang,name}=p
    if (props.lang=="en"){
        return(
            <div>
                welcom <strong>{props.name}</strong>
            </div>
        )
    }
    if (props.lang=="es"){
            return(
                <div>
                    holla <strong>{props.name}</strong>
                </div>
    )}
    
    return(
        <div>
            Bienvenu chez {props.name}
        </div>
    )
}