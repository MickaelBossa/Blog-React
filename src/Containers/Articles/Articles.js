// Librairies
import { React, useState, useEffect } from 'react';
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

                let articlesArray = [];
                
                for (let key in response.data) {
                    articlesArray.push({
                        ...response.data[key],
                        id: key,
                    })
                }

                // Mettre les derniers articles en premier
                articlesArray.reverse();

                // Trier les articles publiés des brouillons
                articlesArray = articlesArray.filter((article) => article.draft == "false");

                setArticles(articlesArray);
            })
            .catch(error => {
                console.log(error);
            });
    }, [])

    return (
        <div>
             <h1>Articles</h1>  
             <DisplayedArticles articles={articles} />
        </div>
    )
}
