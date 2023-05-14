import { LoginProviderContext } from "../context/LoginContext";
import { LoginForm } from "./LoginForm";

export const Login = () => {
  return (
    <div>
      <LoginProviderContext>
        <h2> Please log In </h2>
        <LoginForm />
      </LoginProviderContext>
    </div>
  );
};
