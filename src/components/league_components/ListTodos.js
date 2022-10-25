import React, { Fragment, useState, useEffect, useContext } from "react";
import EditTodo from "./EditTodo";
import { LeagueContext } from "./League";

const ListTodos = () => {
  const { todos, getTodos, deleteTodo } = useContext(LeagueContext);
  const [show, setShow] = useState(false);

  //delete Todos

  useEffect(() => {
    getTodos();
  }, []);

  return (
    <Fragment>
      <table className="table mt-5 text-primary ">
        <thead>
          <tr className="text-center">
            <th>Description</th>
            <th>Edit</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {todos.map((todo, index) => (
            <tr key={todo.todo_id}>
              <td>{todo.description}</td>
              <td className="text-center">
                <button
                  onClick={() => {
                    setShow(true);
                  }}
                  className="btn btn-warning"
                  type="button"
                >
                  Edit
                </button>
                <EditTodo
                  todo={todo}
                  index={index}
                  show={show}
                  setShow={() => setShow(!show)}
                  style={{
                    position: "fixed",
                    inset: 0,
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                />
              </td>
              <td className="text-center">
                <button
                  className="btn btn-danger"
                  onClick={() => deleteTodo(todo.todo_id)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </Fragment>
  );
};

export default ListTodos;
