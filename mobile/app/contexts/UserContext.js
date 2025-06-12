import React, { createContext, useState } from 'react';

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [storedUser, setStoredUser] = useState(null);

  return (
    <UserContext.Provider value={{ storedUser, setStoredUser }}>
      {children}
    </UserContext.Provider>
  );
};
