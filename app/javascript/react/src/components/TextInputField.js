import React from "react";

const TextInputField = props => {
  return(
    <div>
      <label onChange={props.handleChange}>{props.label}
        <input
          name={props.name}
          type="text"
          value={props.value}
        />
      </label>
    </div>
  )
}

export default TextInputField;
