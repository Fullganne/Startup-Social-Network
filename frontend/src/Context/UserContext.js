// UserContext.js
import { createContext, useEffect, useState } from "react";

export const UserContext = createContext({});

export const AppProvider = ({ children }) => {
  const [userData, setUserData] = useState(() => {
    const storedUser = localStorage.getItem("user");
    return storedUser ? JSON.parse(storedUser) : null;
  });
  
  useEffect(() => {
    // Update userData when localStorage changes
    const handleStorageChange = () => {
      const storedUser = localStorage.getItem("user");
      setUserData(storedUser ? JSON.parse(storedUser) : null);
    };

    window.addEventListener("storage", handleStorageChange);

    // Cleanup the event listener when the component is unmounted
    return () => {
      window.removeEventListener("storage", handleStorageChange);
    };
  }, []); // The empty dependency array ensures that this effect runs only once

  return (
    <UserContext.Provider value={{ userData }}>
      {children}
    </UserContext.Provider>
  );
};
