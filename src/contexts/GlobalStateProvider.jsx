import React, { useState } from "react";
import GlobalStateContext from "./GlobalStateContext";

const GlobalStateProvider = ({ children }) => {
  const [isAuthenticate, setIsAuthenticate] = useState(false);
  return (
    <GlobalStateContext.Provider value={{ isAuthenticate, setIsAuthenticate }}>
      {children}
    </GlobalStateContext.Provider>
  );
};

export default GlobalStateProvider;
