// Librairies
import {useParams} from 'react-router-dom'


export default function Article() {

    const params = useParams()

    return (
        <h1>
           Ma page article ({params.id}) 
        </h1>
    )
}
