import { useContext, useState, useRef } from "react";
import { TodoContext, ContextTodos } from "../context/TodoContext";
import { todoItem } from "../context/TodoContext";
import deleteIcon from "../../src/assests/deleteIcon.svg";
import addIcon from "../../src/assests/addIcon.svg";
import { SubTodos } from "./SubTodo";

type SingleTodoProps = {
  todo: todoItem;
};

export const SingleTodo = ({ todo }: SingleTodoProps) => {
  const { deleteTodo, addSubtask } = useContext(TodoContext) as ContextTodos;
  const [showAdd, setShowAdd] = useState<boolean>(false);
  const inputRef = useRef<HTMLInputElement>(null);

  const addnewSubTask = () => {
    addSubtask(todo.id, inputRef.current?.value || "");
    if (inputRef.current) {
      inputRef.current.value = "";
    }
  };

  return (
    <div className="todo-item">
      <div className="head-line">
        <div className="title-box">
          <span> Title </span> :<span className="todo-title">{todo.title}</span>
        </div>
        <div className="action-box">
          <img
            src={deleteIcon}
            onClick={() => deleteTodo(todo.id)}
            alt="delete"
          />
        </div>
      </div>
      {!!todo.description && (
        <div className="des-box">
          <span> Description </span> :
          <span className="todo-title">{todo.description}</span>
        </div>
      )}
      <div className="subTask-box">
        {!showAdd && (
          <label className="sub-todo-btn" onClick={() => setShowAdd(true)}>
            <img src={addIcon} alt="Plus" /> Add Todo
          </label>
        )}
        {!!showAdd && (
          <div className="add-new-subtask">
            <label> Title </label>
            <input ref={inputRef} placeholder="Title" />
            <div className="sub-task-btn">
              <button onClick={addnewSubTask}> Add Subtask</button>
              <button onClick={() => setShowAdd(false)}> Cancel</button>
            </div>
          </div>
        )}
      </div>
      {!!todo.subTasks?.length && (
        <SubTodos subTasks={todo.subTasks} todoId={todo.id} />
      )}
    </div>
  );
};
