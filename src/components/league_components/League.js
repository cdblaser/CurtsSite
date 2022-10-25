import React, { useEffect, useState, Fragment } from "react";
import InputTodo from "./InputTodo.js";
import EditTodo from "./EditTodo.js";
import ListTodos from "./ListTodos.js";

export const LeagueContext = React.createContext();

const League = () => {
  const [todos, setTodos] = useState([]);

  const getTodos = async () => {
    const res = await fetch("http://localhost:8080/todos", {
      method: "GET",
    });
    const todoArray = await res.json();
    setTodos(todoArray);
  };

  const deleteTodo = async (id) => {
    try {
      const res = await fetch(`http://localhost:8080/todos/${id}`, {
        method: "DELETE",
      });
      setTodos(todos.filter((todo) => todo.todo_id !== id));
    } catch (err) {
      console.error(err.message);
    }
  };

  //get Todos

  // const [state, setState] = useState();

  // useEffect(() => {
  //   fetch("/todos")
  //     .then((response) => response.json(response.data))
  //     .then((data) => {
  //       setState(data);
  //     });
  // }, []);

  return (
    <LeagueContext.Provider value={{ getTodos, todos, setTodos, deleteTodo }}>
      <div className="container">
        <InputTodo />
        <ListTodos />
      </div>
    </LeagueContext.Provider>
  );
};

export default League;

// const instance = axios.create({
//   baseURL: "https://na1.api.riotgames.com/lol/platform/v3/champion-rotations",
//   params: { api_key: "RGAPI-193c1a36-4262-4b0f-878e-e7db687d0e7f" },
// });

// const getData = async () => {
//   const response = await instance.get("");
//   setState(response);
//   console.log(response.data.freeChampionIds);
// };

// const instance = axios.create({
//   headers: {
//     "X-Riot-Token": "RGAPI-60d24805-1142-4441-a3ad-7c864a5243ae",
//   },
//   baseURL: "https://na1.api.riotgames.com/lol/platform/v3/champion-rotations",
//   // params: { api_key: "RGAPI-b5b9cc56-f41d-4eaa-991e-d4f8b7146cd7" },
// });

// const requestTime = (req, res, next) => {
//   req.hello = Date.now();
//   next();
// };

// useEffect(() => {
//   getData();
// }, []);
