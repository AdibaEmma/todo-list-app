import React, { useState } from "react";
import TodoItem from "./TodoItem";
import InputArea from "./InputArea";

function App() {
  const [listItem, setListItem] = useState("");

  let [listItems, updateListItems] = useState([]);

  function handleChange(event) {
    const value = event.target.value;

    setListItem(value);
  }

  function updateList() {
    updateListItems((prevItems) => {
      return [listItem, ...prevItems];
    });

    setListItem("");
  }

  function deleteItem(id) {
    console.log(id);

    updateListItems((prevItems) => {
      return prevItems.filter((item, index) => {
        return index !== id;
      });
    });
  }
  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      <InputArea
        handleChange={handleChange}
        listItem={listItem}
        addListItem={updateList}
      />
      <div>
        <ul>
          {listItems.map((todoItem, index) => (
            <TodoItem
              key={index}
              id={index}
              item={todoItem}
              onChecked={deleteItem}
            />
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
