import React from "react";

function InputArea(props) {
  return (
    <div className="form">
      <input onChange={props.handleChange} type="text" value={props.listItem} />
      <button onClick={props.addListItem}>
        <span>Add</span>
      </button>
    </div>
  );
}

export default InputArea;
