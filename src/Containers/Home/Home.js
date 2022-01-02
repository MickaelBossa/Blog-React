// Librairies
import { Link } from 'react-router-dom';

export default function Home() {
    return (
        <div>
            <h1>Accueil</h1>   
            <Link to='/articles/1'>Voir mon article</Link>           
        </div>
    )
}
