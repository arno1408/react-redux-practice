import React, { createContext, useState } from "react";

export const RoleContext = createContext();

function RoleProvider({ children }) {
  const [user, setUser] = useState(null); // User info: {email, role}

  return (
    <RoleContext.Provider value={{ user, setUser }}>
      {children}
    </RoleContext.Provider>
  );
}

export default RoleProvider;
