import { createContext, useState } from "react";

export const UserContext = createContext("light");

export const ContextProvider = ({ children }) => {
  const [user, setUser] = useState({});
  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
};
