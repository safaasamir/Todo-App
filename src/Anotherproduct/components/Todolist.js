import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faCheckCircle,
  faEdit,
  faTrash,
} from "@fortawesome/free-solid-svg-icons";

library.add(faCheckCircle, faEdit, faTrash);

const Todolist = (props) => {
  const { todos, setTodo, settEdittodo } = props;

  const handleDelete = ({ id }) => {
    setTodo(todos.filter((todos) => todos.id !== id));
  };
  const handelcomplete = ( todo ) => {
    setTodo(
      todos.map((item) => {
        if (item.id === todo.id) {
          return { ...item, completed: !item.completed };
        }
        return item;
      })
    );
  };
  const handeledit = ({ id }) => {
    const findtodo = todos.find((todo) => todo.id === id);
    settEdittodo(findtodo);
  };
  return (
    <div>
      {todos.map((todo) => (
        <li className="list-item" key={todo.id}>
          <input
            type="text"
            value={todo.title}
            className={`list ${todo.completed ? "complete" : "" }`}
            onChange={(e) => {
              e.preventDefault();
            }}
          />
          <div>
            <button
              className="button-complete task-button"
              onClick={() => {
                handelcomplete(todo);
              }}
            >
              <FontAwesomeIcon icon="check-circle" />
            </button>
            <button
              className="button-edit task-button"
              onClick={() => {
                handeledit(todo);
              }}
            >
              <FontAwesomeIcon icon="edit" />
            </button>
            <button
              className="button-delete task-button"
              onClick={() => {
                handleDelete(todo);
              }}
            >
              <FontAwesomeIcon icon="trash" />
            </button>
          </div>
        </li>
      ))}
    </div>
  );
};

export default Todolist;
