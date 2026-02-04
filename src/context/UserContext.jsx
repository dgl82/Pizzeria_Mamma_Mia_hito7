import { Children, createContext, useState } from "react";

export const UserContext = createContext();

const UserProvider = ({ children }) => {
  const [token, setToken] = useState(false);

  const Login = () => {
    setToken(true);
  };

  const Logout = () => {
    setToken(false);
  };

  return (
    <UserContext.Provider value={{ token, setToken }}>
      {children}
    </UserContext.Provider>
  );
};

export default UserProvider;
