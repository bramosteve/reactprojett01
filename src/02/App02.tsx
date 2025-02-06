import Capital from "./Capitale";
import Etudiant from "./Etudiant";
import Hello from "./Hello";

export default function App02(){
    return(
        <div>
            <div>Capitale</div>
            <Capital pays="RCA" ville="Bangui"/>
            <Capital pays="Maroc" ville="Rabat"/>
            <Capital pays="Senegale" ville="Dakar"/>


            
            <h1>Etudiant</h1>
            <Etudiant nom="Bramo" prenom="steve" telephone="72636781"/>
            <Etudiant nom="Bramo" prenom="joclaver" telephone="72636781"/>

            <h1>welcome</h1>
            <Hello lang="en" name="Steve" />
            <Hello lang="es" name="Steve" />
            <Hello lang="fr" name="Steve" />
            


        </div>
    )
}