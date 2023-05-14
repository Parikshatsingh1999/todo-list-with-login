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
      <div className="subtask-wrapper">
        <ul>
          {!!subTasks.length &&
            subTasks.map((sub) => (
              <li key={sub.id}>
                <div className="single-subTodo">
                  <div className="sub-title-box">
                    <span className="label-span"> SubTask Title :</span>
                    <span className="sub-title">{sub.title}</span>
                  </div>
                  <div className="delete-sub">
                    <img
                      src={deleteIcon}
                      onClick={() => deleteSubTodo(todoId, sub.id)}
                      alt="Delete Sub Todo"
                    />
                  </div>
                </div>
              </li>
            ))}
        </ul>
      </div>
    </>
  );
};
