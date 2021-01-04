import React, { useState } from "react";

function TodoItem(props) {
  const [isStrike, setIsStrike] = useState(false);

  function addStrike() {
    setIsStrike((prevValue) => {
      return !prevValue;
    });
  }

  return (
    <div onClick={addStrike}>
      <li style={{ textDecoration: isStrike ? "line-through" : "none" }}>
        {props.item}
      </li>
    </div>
  );
}

export default TodoItem;
