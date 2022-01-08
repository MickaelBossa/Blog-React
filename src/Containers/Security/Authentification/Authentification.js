// Style
import classes from './Authentification.module.css';

// Librairies
import React, { useState } from 'react'
import { checkValidity } from '../../../shared/utility';
import { useNavigate } from 'react-router-dom';
import routes from '../../../config/routes';
import fire from '../../../config/firebase';

// Composants
import Input from '../../../Components/UI/Input/Input';

export default function Authentification() {

// States
    const [inputs, setInputs] = useState({
        email: {
            elementType: 'input',
            elementConfig: {
                type: 'email',
                placeholder: 'Email'
            },
            value: '',
            label: 'Adresse email',
            valid: false,
            validation: {
                required: true,
                email: true
            },
            touched: false,
            errorMessage: "L'adresse email n'est pas valide"
        },
        password: {
            elementType: 'input',
            elementConfig: {
                type: 'password',
                placeholder: 'Mot de passe'
            },
            value: '',
            label: 'Mot de passe',
            valid: false,
            validation: {
                required: true,
            },
            touched: false,
            errorMessage: "Le mot de passe doit être renseigné"
        },
    });

    const [validForm, setValidForm] = useState(false);

// Fonctions
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
        };

    const registerClickedHandler = () => {

        const user = {
            email: inputs.email.value,
            password: inputs.password.value
        }

        navigate(routes.HOME);
    }

    const loginClickedHandler = () => {

        const user = {
            email: inputs.email.value,
            password: inputs.password.value
        }

        navigate(routes.HOME);
    }

    const formHandler = event => {
        event.preventDefault();
    }

// Constantes
const navigate = useNavigate();

const formElementsArray = [];
for(let key in inputs) {
    formElementsArray.push({
        id: key,
        config: inputs[key],
    });
}

const form = (
    <form onSubmit={(e) => formHandler(e)}>
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
        <div className={classes.buttons}>
            <button 
            className={classes.button} 
            disabled={!validForm}
            onClick={registerClickedHandler}
            >
                Inscription
            </button>

            <button 
            className={classes.button} 
            disabled={!validForm}
            onClick={loginClickedHandler}
            >
                Connexion
            </button>
        </div>
    </form>
)

    return (
        <>
            <h1>Authentification</h1>
            <div className={classes.form}>
                {form}
            </div>
        </>
    )
}
