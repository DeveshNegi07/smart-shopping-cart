import React, { createContext, useState } from "react";

export const userContext = createContext();

const UserContext = ({ children }) => {
  const [user, setUser] = useState({
    firstName: "Devesh",
    lastName: "Negi",
    email: "Negid@gmail.com",
    phone: "+91-9998887776",
    address: "123 Main Street, Dehradun, India",
  });
  const handleSave = (value) => {
    setUser(value);
  };
  return (
    <userContext.Provider value={{ user, handleSave }}>
      {children}
    </userContext.Provider>
  );
};

export default UserContext;
