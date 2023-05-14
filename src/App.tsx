import "./App.css";
import { TodoList } from "./components/TodoList";
import { Login } from "./components/Login";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";

function App() {
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
