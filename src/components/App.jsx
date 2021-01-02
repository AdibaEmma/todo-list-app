import React, { useState } from "react";

function App() {
  const [listItem, setListItem] = useState([]);

  function handleChange(event) {
    const value = event.target.value;

    setListItem(value);
  }

  function updateList() {}
  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      <div className="form">
        <input onChange={handleChange} type="text" />
        <button onClick={updateList}>
          <span>Add</span>
        </button>
      </div>
      <div>
        <ul>
          <li>{listItem} </li>
        </ul>
      </div>
    </div>
  );
}

export default App;
