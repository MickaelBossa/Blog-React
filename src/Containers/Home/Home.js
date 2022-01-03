// Librairies
import { Link } from 'react-router-dom';
import routes from '../../config/routes';

export default function Home() {
    return (
        <div>
            <h1>Accueil</h1>   
            <Link to={routes.ARTICLES + '/1'}>Voir mon article</Link>           
        </div>
    )
}
