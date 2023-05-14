import { useContext, useState } from "react";
import { ContextLogin, LoginContext } from "../context/LoginContext";
export const LoginForm = () => {
  const { checkLogin } = useContext(LoginContext) as ContextLogin;

  const [userDetails, setUserDetails] = useState<{
    username: string;
    password: string;
  }>({ username: "", password: "" });

  const setDetails = (name: string, value: string) => {
    setUserDetails((prev) => {
      return {
        ...prev,
        [name]: value,
      };
    });
  };

  return (
    <div className="login-form">
      <label> Fill username and password</label>
      <div>
        <label htmlFor="username"> Username </label>
        <input
          value={userDetails.username}
          onChange={(e) => setDetails("username", e.target.value)}
          id="username"
          placeholder="singh"
        />
      </div>
      <div>
        <label htmlFor="password"> Password </label>
        <input
          value={userDetails.password}
          id="password"
          onChange={(e) => setDetails("password", e.target.value)}
          placeholder="1999"
        />
      </div>
      <button
        disabled={!userDetails.password.length || !userDetails.username.length}
        onClick={(e) => checkLogin(userDetails)}
      >
        Login
      </button>
    </div>
  );
};
