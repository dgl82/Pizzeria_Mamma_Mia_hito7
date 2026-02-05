import { createContext, useState } from "react";

export const UserContext = createContext();

const UserProvider = ({ children }) => {
  const [token, setToken] = useState(null);

  const Login = () => {
    setToken(true);
  };

  const Logout = () => {
    setToken(false);
    console.log(token);
  };

  return (
    <UserContext.Provider value={{ token, Logout, Login }}>
      {children}
    </UserContext.Provider>
  );
};

export default UserProvider;
