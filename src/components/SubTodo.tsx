import { useContext } from "react";
import { TodoContext, ContextTodos } from "../context/TodoContext";
import { subTodos } from "../context/TodoContext";
import deleteIcon from "../../src/assests/deleteIcon.svg";

type AddSubTodoProps = {
  subTasks: subTodos[];
  todoId: number;
};

export const SubTodos = ({ subTasks, todoId }: AddSubTodoProps) => {
  const { deleteSubTodo } = useContext(TodoContext) as ContextTodos;

  return (
    <>
      {!!subTasks.length &&
        subTasks.map((sub) => (
          <div className="single-subTodo" key={sub.id}>
            <div>
              <p className="sub-title">{sub.title}</p>
            </div>
            <div className="delete-sub">
              <img
                src={deleteIcon}
                onClick={() => deleteSubTodo(todoId, sub.id)}
                alt="Delete Sub Todo"
              />
            </div>
          </div>
        ))}
    </>
  );
};
