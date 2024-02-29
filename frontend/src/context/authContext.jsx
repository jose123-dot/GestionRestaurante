import { createContext, useState, useContext } from "react";
import { registerRequest } from "../httpService/auth";

export const authContext = createContext();

export const useAuth = () => {
  const context = useContext(authContext);
  if (!context) {
    throw new Error("UseAuth must be used within an authprovider");
  }
  return context;
};

export const AuthPrivider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [isAuthenticated, setisAuthenticated] = useState(false);
  const [errors, serErrors] = useState(null);

  const signup = async (user) => {
    try {
      const res = await registerRequest(user);
      console.log(res.data);
      setUser(res.data);
      setisAuthenticated(true);
    } catch (error) {
      serErrors(errors.response.data);
    }
  };
  return (
    <authContext.Provider value={{ user, signup, isAuthenticated }}>
      {children}
    </authContext.Provider>
  );
};
