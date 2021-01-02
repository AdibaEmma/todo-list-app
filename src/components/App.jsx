import React, { useState } from "react";

function App() {
  const [listItem, setListItem] = useState("");

  let [listItems, updateListItems] = useState([]);

  function handleChange(event) {
    const value = event.target.value;

    setListItem(value);
  }

  function updateList() {
    updateListItems((prevValue) => {
      return [...prevValue, listItem];
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
          {listItems.map((item) => {
            return <li>{item}</li>;
          })}
        </ul>
      </div>
    </div>
  );
}

export default App;
