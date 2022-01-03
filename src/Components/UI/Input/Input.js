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
            />
        );
        break;
    case('textarea'):
        inputElement= (
          <textarea value={props.value}></textarea>
        );
        break;
    case('select'):
        inputElement= (
          <select value={props.value}>
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
          <label>{props.label}</label>
          {inputElement}
        </div>
    )
}
