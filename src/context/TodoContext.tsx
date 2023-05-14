import { ReactNode, createContext, useState } from "react";
import { useNavigate } from "react-router-dom";
export type ContextTodos = {
  todoList: todoItem[];
  addTodoItem: (item: AddTodoItem) => void;
  deleteTodo: (id: number) => void;
  addSubtask: (id: number, title: string) => void;
  deleteSubTodo: (id: number, subId: string) => void;
};

export const TodoContext = createContext<ContextTodos | null>(null);

type todoContextProps = {
  children: ReactNode;
};

export type todoItem = {
  id: number;
  description?: string;
  title: string;
  subTasks?: subTodos[];
};

export type subTodos = {
  id: string;
  title: string;
};

export type AddTodoItem = {
  description?: string;
  title: string;
};

let TodoListings: todoItem[] = [];

export const TodoContextProvider = ({ children }: todoContextProps) => {
  const navigate = useNavigate();

  const [todoList, setTodoList] = useState<todoItem[]>(TodoListings);

  const addTodoItem = (item: AddTodoItem) => {
    const id = todoList.length ? todoList[todoList.length - 1].id + 1 : 1;
    setTodoList((prev) => {
      const newList = [...prev, { ...item, id }];
      TodoListings = newList;
      return newList;
    });
  };

  const deleteTodo = (id: number) => {
    const todo = todoList.find((item) => item.id === id);
    if (!todo) {
      console.error("something is wrong");
      setTodoList((prev) => [...prev]);
      return;
    }
    const newList = todoList.filter((item) => item.id !== id);
    TodoListings = newList;
    setTodoList(newList);
  };

  const addSubtask = (id: number, title: string) => {
    if (!id || !title) {
      console.error("please provide required details");
      alert("Please provide required details");
      return;
    }
    const todo = todoList.find((item) => item.id === id);
    if (!todo) {
      console.error("something is wrong");
      setTodoList((prev) => [...prev]);
      return;
    }
    const prevSubs = todo?.subTasks ?? [];
    let newId = prevSubs[prevSubs.length - 1]?.id.split("-").pop() ?? 0;
    newId = Number(newId) + 1;
    const subTasskId = `${todo.id}-${newId}`;
    todo.subTasks = [...prevSubs, { id: subTasskId, title }];

    setTodoList((prev) => {
      const newList = [...structuredClone(prev)];
      TodoListings = newList;
      return newList;
    });
  };

  const deleteSubTodo = (id: number, subId: string) => {
    if (!id || !subId) {
      console.error("please provide required details");
      alert("Please provide required details");
      return;
    }
    const todo = todoList.find((item) => item.id === id);
    if (!todo) {
      console.error("something is wrong");
      setTodoList((prev) => [...prev]);
      return;
    }
    const newSubList = todo.subTasks?.filter((item) => item.id !== subId);
    todo.subTasks = structuredClone(newSubList);
    setTodoList((prev) => {
      const newList = [...structuredClone(prev)];
      TodoListings = newList;
      return newList;
    });
  };

  const loggedInUser = sessionStorage.getItem("authenticated");
  console.log("loggedUser", loggedInUser);
  if (loggedInUser !== "true") {
    console.log("entered");
    navigate("/login");
  }

  return (
    <TodoContext.Provider
      value={{ todoList, addTodoItem, deleteTodo, addSubtask, deleteSubTodo }}
    >
      {children}
    </TodoContext.Provider>
  );
};
