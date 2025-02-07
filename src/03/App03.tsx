import Hello from '../02/Hello'

function transform(valeur:number,index:number){
    return(
        <div key={index} > Chiffre: {valeur}</div>
    )
}

function transform2(valeur:string,index:number){
    return(
        <Hello key={index}  name={valeur} />
    )
}

export default function App03() {

    const data=[ 10 , 30 , 50 , 10];
    const listEtudiants=data.map(transform);

    const data2=["Bramo","steve","joclaver"];
    const Bienvenue=data2.map(transform2)

    return(
        <div>

           {listEtudiants}
           <br />
           {Bienvenue}

        </div>
    )
}