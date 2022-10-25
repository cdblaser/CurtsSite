import React, { Fragment, useState, useContext } from "react";
import ReactDOM from "react-dom";
import { LeagueContext } from "./League";

const EditTodo = ({ todo, index, show, setShow }) => {
  const { todos, getTodos, deleteTodo } = useContext(LeagueContext);
  if (!show) return null;

  return ReactDOM.createPortal(
    <div className="modal" onClick={setShow}>
      <div
        className="modal-window"
        onClick={(e) => {
          e.stopPropagation();
        }}
      >
        <div className="modal-header">Edit task</div>
        <div className="modal-content">
          <input
            type="text"
            className="form-control"
            value={todos.filter((x, i) => i === index)}
          />
        </div>
        <div className="modal-footer">
          <button onClick={setShow}>Confirm</button>
          <button onClick={setShow}>Close</button>
        </div>
      </div>
    </div>,
    document.getElementById("root")
  );
};

export default EditTodo;
