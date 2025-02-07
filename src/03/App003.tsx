import Country from '../03/country'

const studentlist=[
    {
    nompays:"centrafrique",
    capitale:"bangui",
    drapeau:"bleu,blanc,vert,jaune,rougr",
    population:"banguisoi",
}
,
{
    nompays:"France",
    capitale:"Paris",
    drapeau:"bleu,blanc,rougr",
    population:"francaise",
},


]
export default function App003() {
    const student=studentlist.map(function(e,index){

        return(
            <Country key={index}
              nompays={e.nompays}   
              capitale={e.capitale}
              drapeau={e.drapeau}
              population={e.population}
            />
        )

    })

    return(
        <div>
            <h1>Liste pays</h1> 
              {student}
        </div>
    )
 
}