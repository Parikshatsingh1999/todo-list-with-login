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
      <label className="info-label"> Fill username and password</label>
      <div className="form-wrapper">
        <div className="form-line">
          <label htmlFor="username"> Username </label>
          <input
            value={userDetails.username}
            onChange={(e) => setDetails("username", e.target.value)}
            id="username"
            placeholder="singh"
          />
        </div>
        <div className="form-line">
          <label htmlFor="password"> Password </label>
          <input
            value={userDetails.password}
            id="password"
            onChange={(e) => setDetails("password", e.target.value)}
            placeholder="1999"
          />
        </div>
      </div>

      <button
        data-active={
          !!userDetails.password.length && !!userDetails.username.length
        }
        className="login-btn"
        disabled={!userDetails.password.length || !userDetails.username.length}
        onClick={(e) => checkLogin(userDetails)}
      >
        Login
      </button>
    </div>
  );
};
