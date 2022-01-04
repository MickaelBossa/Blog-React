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
            label: 'Titre de l\'article',
            valid: false,
            validation: {
                required: true,
                minLength: 2,
                maxLength: 100,
            },
            touched: false,
            errorMessage: 'Le titre doit faire entre 2 et 100 caractères'
        },
        content: {
            elementType: 'textarea',
            elementConfig: {},
            value: '',
            label: 'Contenu de l\'article',
            valid: false,
            validation: {
                required: true,
                minLength: 5,
            },
            touched: false,
            errorMessage: 'L\'article doit faire minimum 5 caractères'
        },
        author: {
            elementType: 'input',
            elementConfig: {
                type: 'text',
                placeholder: 'Auteur de l\'article'
            },
            value: '',
            label: 'Auteur de l\'article',
            valid: false,
            validation: {
                required: true,
                minLength: 1,
                maxLength: 25
            },
            touched: false,
            errorMessage: 'L\'auteur doit faire entre 1 et 25 caractères'
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
            label: 'Etat',
            valid: true,
            validation: {}
        }
    })

    const [validForm, setValidForm] = useState(false);

// Fonctions
const checkValidity = (value, rules) => {
    let isValid = true;

    if(rules.required) {
        isValid = value.trim() !== '' && isValid;
    }

    if(rules.minLength) {
        isValid = value.length >= rules.minLength && isValid;
    }

    if(rules.maxLength) {
        isValid = value.length <= rules.maxLength && isValid;
    }

    return isValid
}

const inputChangedHandler = (event, id) => {
// Change la valeur
    const newInputs = {...inputs};
    newInputs[id].value = event.target.value;
    newInputs[id].touched = true;

// Vérifie la valeur
    newInputs[id].valid = checkValidity(event.target.value, newInputs[id].validation);

    setInputs(newInputs);

// Vérifie le formulaire
    let formIsValid = true;
    for(let input in newInputs) {
        formIsValid = newInputs[input].valid && formIsValid;
    }
    setValidForm(formIsValid);
}

const formHandler = (event) => {
    event.preventDefault();

    console.log(event);
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
        <form className={classes.add} onSubmit={(e) => formHandler(e)}>
            {formElementsArray.map((formElement) => (
                <Input 
                key={formElement.id}
                id={formElement.id}
                value={formElement.config.value}
                label={formElement.config.label}
                type={formElement.config.elementType}
                config={formElement.config.elementConfig}
                valid={formElement.config.valid}
                touched={formElement.config.touched}
                errorMessage={formElement.config.errorMessage}
                changed={(e) => inputChangedHandler(e, formElement.id)}
                />
            ))}
            <div className={classes.submit}>
                <input type="submit" value="Ajouter un article" disabled={!validForm} />
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
