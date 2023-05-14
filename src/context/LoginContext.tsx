import { ReactNode, createContext } from "react";
import { useNavigate } from "react-router-dom";

export type ContextLogin = {
  checkLogin: (details: IUserLogin) => void;
};

export interface IUserLogin {
  username: string;
  password: string;
}

type LoginContextProps = {
  children: ReactNode;
};

const LoginCreds: IUserLogin[] = [
  { username: "singh", password: "1999" },
  { username: "testing", password: "testingpw" },
];

export const LoginContext = createContext<ContextLogin | null>(null);

export const LoginProviderContext = ({ children }: LoginContextProps) => {
  const navigate = useNavigate();
  const checkLogin = ({ username = "", password = "" }: IUserLogin) => {
    const user = LoginCreds.find((cred) => {
      return cred.password == password && cred.username == username;
    });

    if (user) {
      alert("Congratulations You Logged In");
      sessionStorage.setItem("authenticated", "true");
      navigate("/");
    } else {
      alert("Wrong creds");
      sessionStorage.setItem("authenticated", "false");
    }
  };

  return (
    <>
      <LoginContext.Provider value={{ checkLogin }}>
        {children}
      </LoginContext.Provider>
    </>
  );
};
