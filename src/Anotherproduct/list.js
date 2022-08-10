import React, { useState,useEffect } from "react";
import Header from "./components/Header";
import "./list.css";
import Form from "./components/Form";
import Todolist from "./components/Todolist";

const List = () => {
    const initialsState=JSON.parse(localStorage.getItem("todos"))||[];
  const [input, setInput] = useState("");
  const [todos, setTodo] = useState(initialsState);
  const [editTodo,settEdittodo]=useState(null)
  useEffect(()=>{localStorage.setItem("todos",JSON.stringify(todos))},[todos])
  return (
    <div className="container">
      <div className="app-wrapper">
        <div>
          <Header />
        </div>
        <div>
          <Form
            input={input}
            setInput={setInput}
            todos={todos}
            setTodo={setTodo}
            editTodo={editTodo}
            settEdittodo={settEdittodo}
          />
        </div>
        <div>
          <Todolist todos={todos} setTodo={setTodo} settEdittodo={settEdittodo} />
        </div>
      </div>
    </div>
  );
};
export default List;
