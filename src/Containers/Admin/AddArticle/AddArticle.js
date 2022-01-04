// Style
import classes from './AddArticle.module.css';

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
        },
        status: {
            elementType: 'select',
            elementConfig: {
                options: [
                    {value: 'Brouillon'},
                    {value: 'Publié'}
                ]
            },
            value: '',
            label: 'Etat'
        }
    })

// Fonctions
const inputChangedHandler = (event, id) => {
    const newInputs = {...inputs};
    newInputs[id].value = event.target.value;
    setInputs(newInputs);
}

// Constantes
    const formElementsArray = [];
    for(let key in inputs) {
        formElementsArray.push({
            id: key,
            config: inputs[key],
        });
    }

    const form = (
        <form className={classes.add}>
            {formElementsArray.map((formElement) => (
                <Input 
                key={formElement.id}
                id={formElement.id}
                value={formElement.config.value}
                label={formElement.config.label}
                type={formElement.config.elementType}
                config={formElement.config.elementConfig}
                changed={(e) => inputChangedHandler(e, formElement.id)}
                />
            ))}
            <div className={classes.submit}>
                <input type="submit" value="Envoyer" />
            </div>
        </form>
    )

    return (
        <div className='container'>
            <h1>Ajouter un article</h1>
            {form}     
        </div>
    )   
}
