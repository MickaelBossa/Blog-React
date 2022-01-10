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
                minLength: 6,
            },
            touched: false,
            errorMessage: "Le mot de passe doit contenir au moins 6 caractères"
        },
    });

    const [validForm, setValidForm] = useState(false);

    const [emailError, setEmailError] = useState(false);

    const [loginError, setLoginError] = useState(false);

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

        fire
            .auth()
            .createUserWithEmailAndPassword(user.email, user.password)
            .then((response) => {
                navigate(routes.HOME);
            })
            .catch((error) => {
                switch(error.code) {
                    case'auth/email-already-in-use':
                        setEmailError(true);
                        break;
                }
            });
    }

    const loginClickedHandler = () => {

        const user = {
            email: inputs.email.value,
            password: inputs.password.value
        }

        fire
            .auth()
            .signInWithEmailAndPassword(user.email, user.password)
            .then(response => {
                navigate(routes.HOME);
            })
            .catch(error => {
                switch(error.code) {
                    case "auth/invalide-email":
                    case "auth/user-disabled":
                    case "auth/user-not-found":
                        setLoginError(true);
                        break
                }
            });
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
                {loginError ? <div className={classes.alert}>Impossible de vous authentifier.</div> : null}
                {emailError ? <div className={classes.alert}>Cette adresse email est déjà utilisée.</div> : null}
                {form}
            </div>
        </>
    )
}
