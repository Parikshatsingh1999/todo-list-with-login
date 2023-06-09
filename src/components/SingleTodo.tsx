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
          <span className="label-span"> Title :</span>
          <span className="todo-title">{todo.title}</span>
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
          <span className="label-span"> Description :</span>
          <span className="todo-des">{todo.description}</span>
        </div>
      )}
      <div className="subTask-box">
        {!showAdd && (
          <label className="sub-todo-btn" onClick={() => setShowAdd(true)}>
            <img src={addIcon} alt="Plus" /> Add Sub Todo
          </label>
        )}
        {!!showAdd && (
          <div className="add-new-subtask">
            <input ref={inputRef} placeholder="Title" maxLength={12} />
            <div className="sub-task-btn">
              <button className="button addtodobtn" onClick={addnewSubTask}>
                Add Subtask
              </button>
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
