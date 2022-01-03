// Librairies
import { useState } from 'react';

// Composants
import Input from '../../../Components/UI/Input/Input';

export default function AddArticle() {

// States
    const [inputs, setInputs] = useState({
        title: {
            elementType: 'input',
            elementConfig: {
                type: 'text',
                placeholder: 'Titre de l\'article'
            },
            value: '',
            label: 'Titre de l\'article'
        },
        content: {
            elementType: 'textarea',
            elementConfig: {},
            value: '',
            label: 'Contenu de l\'article'
        },
        author: {
            elementType: 'input',
            elementConfig: {
                type: 'text',
                placeholder: 'Auteur de l\'article'
            },
            value: '',
            label: 'Auteur de l\'article'
        }
    })

// Constantes
    const formElementsArray = [];
    for(let key in inputs) {
        formElementsArray.push({
            id: key,
            config: inputs[key],
        });
    }

    const form = (
        <form>
            {formElementsArray.map((formElement) => (
                <Input 
                key={formElement.id}
                value={formElement.config.value}
                label={formElement.config.label}
                />
            ))}
        </form>
    )

    return (
        <>
            <h1>Ajouter un article</h1>
            {form}     
        </>
    )   
}
