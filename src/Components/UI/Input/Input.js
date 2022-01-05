// Style
import classes from './Input.module.css';

export default function Input(props) {

  let inputElement;
  const inputClasses = [];

  if(!props.valid && props.touched) {
    inputClasses.push(classes.invalid);
  }

  switch(props.type) {
    case('input'):
        inputElement = (
            <input 
            className={inputClasses}
            {...props.config} 
            value={props.value}
            id={props.id}
            onChange={props.changed}
            />
        );
        break;
    case('textarea'):
        inputElement= (
          <textarea 
          className={inputClasses}
          value={props.value}
          id={props.id}
          onChange={props.changed}
          >
          </textarea>
        );
        break;
    case('select'):
        inputElement= (
          <select 
          className={inputClasses}
          value={props.value}
          id={props.id}
          onChange={props.changed}
          >
            {props.config.options.map((option) => (
              <option key={option.value} value={option.value}>
                {option.displayValue}
              </option>
            ))}
          </select>
        );
        break

        // no default
  }

    return (
        <div className={classes.input}>
          <label htmlFor={props.id}>{props.label}</label>
          {inputElement}
          {!props.valid && props.touched ? <span>{props.errorMessage}</span> : null}
        </div>
    )
}
