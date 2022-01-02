// Librairies
import {useParams} from 'react-router-dom'


export default function Article(props) {

    const {id} = useParams()

    return (
        <h1>
           Ma page article ({id}) 
        </h1>
    )
}
