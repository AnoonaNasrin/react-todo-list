import React from "react";

function TodoCard(props) {
  const { children, handleDeleteTodo, index, handleUpdateTodo } = props;
  return (
    <li className="todoItem">
      {children}
      <div className="actionsContainer">
        <button
          onClick={() => {
            handleUpdateTodo(index)
          }}
        >
          <i className="fa-regular fa-pen-to-square"></i>
        </button>
        <button
          onClick={() => {
            handleDeleteTodo(index)
          }}
        >
          <i className="fa-solid fa-trash"></i>
        </button>
      </div>
    </li>
  );
}

export default TodoCard;
