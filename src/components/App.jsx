import React, { useState } from "react";
import TodoItem from "./TodoItem";

function App() {
  const [listItem, setListItem] = useState("");

  let [listItems, updateListItems] = useState([]);

  function handleChange(event) {
    const value = event.target.value;

    setListItem(value);
  }

  function updateList() {
    updateListItems((prevValue) => {
      return [listItem, ...prevValue];
    });

    setListItem("");
  }

  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      <div className="form">
        <input onChange={handleChange} type="text" value={listItem} />
        <button onClick={updateList}>
          <span>Add</span>
        </button>
      </div>
      <div>
        <ul>
          {listItems.map((todoItem) => (
            <TodoItem item={todoItem} />
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
