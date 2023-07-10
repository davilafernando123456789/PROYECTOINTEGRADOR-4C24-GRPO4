import { createContext, useState } from "react";

const AuthContext = createContext({});

export const AuthProvider = ({ children }) => {
    const [authData, setAuthData] = useState(() => {
      const storedAuthData = localStorage.getItem('authData');
      return storedAuthData ? JSON.parse(storedAuthData) : null;
    });
  
    const setAuth = (data) => {
      setAuthData(data);
      localStorage.setItem('authData', JSON.stringify(data));
    };
  
    return (
      <AuthContext.Provider value={{ authData, setAuth }}>
        {children}
      </AuthContext.Provider>
    );
  };
  

export default AuthContext;