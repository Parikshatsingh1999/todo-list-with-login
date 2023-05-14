import "./App.css";
import { TodoList } from "./components/TodoList";
import { Login } from "./components/Login";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
  useNavigate,
} from "react-router-dom";

function App() {
  const navigate = useNavigate();
  const loggedInUser = sessionStorage.getItem("authenticated");
  console.log("loggedUser", loggedInUser);
  if (loggedInUser !== "true") {
    console.log("entered");
    navigate("/login");
  }
  return (
    <>
      <Router>
        <div className="app">
          <h1>Marquee Todos App</h1>
          <Routes>
            <Route path="/" Component={TodoList} />
            <Route path="/login" Component={Login} />
            <Route path="*" element={<Navigate to="/login" replace />} />
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;
