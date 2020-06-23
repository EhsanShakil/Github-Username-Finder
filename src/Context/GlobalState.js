import React, { createContext } from "react";

const initialState = {
  username: [
    {
      name: "ahsan",
      url: "https://api.github.com/users/aamirpinger",
    },
  ],
};

export const GlobalContext = createContext(initialState);

const GlobalProvider = ({ children }) => {
  return (
    <GlobalContext.Provider value={{ initialState }}>
      {children}
    </GlobalContext.Provider>
  );
};

export default GlobalProvider;
