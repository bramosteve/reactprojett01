interface App02Props{
    nom:string
    prenom:string
    telephone:string
}

export default function Etudiant(props:App02Props){
    return(
        <div>
            nom de l'etudiant est {props.nom} sont  {props.prenom} et son nomerao {props.telephone}
        </div>
    )
}