import React, { useState } from "react";
import "./App.css";
import TodoBoard from "./components/TodoBoard";

function App() {
  const [inputValue, setInputValue] = useState("");
  const [todoList, setTodoList] = useState([]);
  const addItem = () => {
    setTodoList([...todoList, inputValue]);
  };
  return (
    <main>
      <input
        type="text"
        onChange={(event) => {
          console.log(event.target.value);
        }}
      />
      <button onClick={addItem}>Add</button>
      <TodoBoard />
    </main>
  );
}

export default App;
