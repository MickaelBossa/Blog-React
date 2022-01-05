// Librairies
import { useState, useEffect } from 'react';
import axios from '../../config/axios-firebase';

// Composants
import DisplayedArticles from '../../Components/DisplayedArticles/DisplayedArticles';

export default function Articles() {

    // State
    const [articles, setArticles] = useState([])

    // ComponentDidMount
    useEffect(() => {

        axios.get('/articles.json')
            .then(response => {
                const articlesArray = [];
                for (let key in response.data) {
                    articlesArray.push({
                        ...response.data[key],
                        id: key,
                    })
                }
                setArticles(articlesArray);
                console.log(articlesArray);
            })
            .catch(error => {
                console.log(error);
            });
    }, [])

    // DisplayedArticles

    return (
        <div>
             <h1>Articles</h1>  
             <DisplayedArticles articles={articles} />
        </div>
    )
}
