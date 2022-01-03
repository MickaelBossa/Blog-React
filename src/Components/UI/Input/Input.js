export default function Input(props) {
    return (
        <div>
          <label>{props.label}</label>
          <input value={props.value} />
        </div>
    )
}
