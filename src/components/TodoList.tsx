import { TodoContextProvider } from "../context/TodoContext";
import { AddTodo } from "./AddTodo";
import { ShowTodo } from "./ShowTodo";
import { useNavigate } from "react-router-dom";

export const TodoList = () => {
  const navigate = useNavigate();

  const logoutUser = () => {
    sessionStorage.setItem("authenticated", "false");
    navigate("/login");
  };

  return (
    <>
      <button onClick={logoutUser} className="logoutBtn">
        Logout
      </button>
      <TodoContextProvider>
        <AddTodo />
        <ShowTodo />
      </TodoContextProvider>
    </>
  );
};
