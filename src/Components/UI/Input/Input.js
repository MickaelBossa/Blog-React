// Style
import classes from './Input.module.css';

export default function Input(props) {

  let inputElement;

  switch(props.type) {
    case('input'):
        inputElement = (
            <input 
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
          value={props.value}
          id={props.id}
          onChange={props.changed}
          >
            {props.config.options.map((option) => (
              <option key={option.value} value={option.value}>
                {option.value}
              </option>
            ))}
          </select>
        );
        break
  }

    return (
        <div className={classes.input}>
          <label htmlFor={props.id}>{props.label}</label>
          {inputElement}
        </div>
    )
}
