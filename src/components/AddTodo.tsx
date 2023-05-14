import { useContext, useState, useRef } from "react";
import { ContextTodos, TodoContext, AddTodoItem } from "../context/TodoContext";

export const AddTodo = () => {
  const descriptionRef = useRef<HTMLTextAreaElement>(null);
  const { addTodoItem } = useContext(TodoContext) as ContextTodos;
  const [details, setDetails] = useState<AddTodoItem>({
    title: "",
    description: "",
  });

  const createTodo = () => {
    addTodoItem({ ...details, description: descriptionRef.current?.value });
    setDetails({ title: "", description: "" });
    if (descriptionRef.current) {
      descriptionRef.current.value = "";
    }
  };

  const fillTitle = (e: any) => {
    setDetails((prev) => {
      return { ...details, title: e.target.value };
    });
  };

  return (
    <div className="add-todo-box">
      <div>
        <label htmlFor="todo-title"> Add Todo Item </label>
      </div>
      <div>
        <input
          maxLength={10}
          onChange={fillTitle}
          value={details.title}
          id="todo-title"
          placeholder="Title"
        />
      </div>
      <div>
        <textarea ref={descriptionRef} placeholder="description" />
      </div>
      <div>
        <button disabled={!details.title.length} onClick={() => createTodo()}>
          Add to do
        </button>
      </div>
    </div>
  );
};
