import { SingleTodo } from "./SingleTodo";
import { useContext } from "react";
import { TodoContext, ContextTodos } from "../context/TodoContext";

export const ShowTodo = () => {
  const { todoList } = useContext(TodoContext) as ContextTodos;

  return (
    <>
      <div className="toto-container">
        <div>
          {!!todoList &&
            todoList.map((todo, index) => (
              <SingleTodo todo={todo} key={`todo-item${todo.id}`} />
            ))}
        </div>
      </div>
    </>
  );
};
