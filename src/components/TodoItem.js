import React from "react";

const editItem = () => {};

const deleteItem = () => {};
function TodoItem(props) {
  return (
    <div>
      <div className="todo-list">{props.item}</div>
      <button onClick={editItem}>Edit</button>
      <button onClick={deleteItem}>Delete</button>
    </div>
  );
}

export default TodoItem;
