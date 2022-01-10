// Style
import classes from './ManageArticle.module.css';

// Librairies
import { React, useState } from 'react';
import axios from '../../../config/axios-firebase';
import routes from '../../../config/routes';
import { useNavigate, useLocation } from 'react-router-dom';
import { checkValidity } from '../../../shared/utility';
import fire from '../../../config/firebase';

// Composants
import Input from '../../../Components/UI/Input/Input';

export default function ManageArticle() {
// Constantes
    const location = useLocation();
    const navigate = useNavigate();


// States
    const [inputs, setInputs] = useState({
        title: {
            elementType: 'input',
            elementConfig: {
                type: 'text',
                placeholder: 'Titre de l\'article'
            },
            value: location.state && location.state.article ? location.state.article.title : '',
            label: 'Titre de l\'article',
            valid: location.state && location.state.article ? true : false,
            validation: {
                required: true,
                minLength: 2,
                maxLength: 100,
            },
            touched: false,
            errorMessage: 'Le titre ne doit pas être vide et être compris entre 2 et 100 caractères'
        },
        preview: {
            elementType: 'textarea',
            elementConfig: {},
            value: location.state && location.state.article ? location.state.article.preview : '',
            label: 'Accroche de l\'article',
            valid: location.state && location.state.article ? true : false,
            validation: {
                required: true,
                minLength: 10,
                maxLength: 150,
            },
            touched: false,
            errorMessage: 'L\'accroche ne doit pas être vide et doit être comprise entre 10 et 150 caractères'
        },
        content: {
            elementType: 'textarea',
            elementConfig: {},
            value: location.state && location.state.article ? location.state.article.content : '',
            label: 'Contenu de l\'article',
            valid: location.state && location.state.article ? true : false,
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
            value: location.state && location.state.article ? location.state.article.author : '',
            label: 'Auteur de l\'article',
            valid: location.state && location.state.article ? true : false,
            validation: {
                required: true,
                minLength: 1,
                maxLength: 25
            },
            touched: false,
            errorMessage: 'L\'auteur ne doit pas être vide et faire maximum 25 caractères'
        },
        status: {
            elementType: 'select',
            elementConfig: {
                options: [
                    {value: true, displayValue: 'Brouillon'},
                    {value: false, displayValue: 'Publié'}
                ]
            },
            value: location.state && location.state.article ? location.state.article.draft : true,
            label: 'Etat',
            valid: true,
            validation: {}
        },
    })

    const [validForm, setValidForm] = useState(location.state && location.state.article ? true : false);

// Fonctions
const generateSlug = (str) => {
    str = str.replace(/^\s+|\s+$/g, ''); // trim
    str = str.toLowerCase();
  
    // remove accents, swap ñ for n, etc
    var from = "àáãäâèéëêìíïîòóöôùúüûñç·/_,:;";
    var to   = "aaaaaeeeeiiiioooouuuunc------";

    for (var i=0, l=from.length ; i<l ; i++) {
        str = str.replace(new RegExp(from.charAt(i), 'g'), to.charAt(i));
    }

    str = str.replace(/[^a-z0-9 -]/g, '') // remove invalid chars
        .replace(/\s+/g, '-') // collapse whitespace and replace by -
        .replace(/-+/g, '-'); // collapse dashes

    return str;
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

    const slug = generateSlug(inputs.title.value);

    const article = {
        title: inputs.title.value,
        content: inputs.content.value,
        author: inputs.author.value,
        draft: inputs.status.value,
        preview: inputs.preview.value,
        date: new Date().toLocaleString('fr-FR'),
        slug: slug
    }

    fire.auth().currentUser.getIdToken()
        .then(token => {
            if(location.state && location.state.article) {
                axios.put('/articles/' + location.state.article.id +'.json?auth=' + token, article)
                .then(response => {
                    console.log(response);
                    navigate(routes.ARTICLES + '/' + article.slug);
                })
                .catch(error => {
                    console.log(error);
                });
            }
            else {
                axios.post('/articles.json', article)
                    .then(response => {
                        console.log(response);
                        navigate(routes.ARTICLES);
                    })
                    .catch(error => {
                        console.log(error);
                    });
            } 
        })
        .catch(error => {
            console.log(error);
        });
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
            <input type="submit" value={location.state && location.state.article ? "Modifier l'article" : "Ajouter un article"} disabled={!validForm} />
        </div>
    </form>
);

return (
    <div className='container'>
        {location.state && location.state.article ?
         <h1>Modifier un article</h1> 
         : 
         <h1>Ajouter un article</h1>}
        {form}     
    </div>
)   
}
