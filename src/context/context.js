import React, { createContext, useContext } from 'react';

const AppContext = createContext();
function AppProvider({ children }) {
  return (
    <AppContext.Provider value={'products context'}>
      {children}
    </AppContext.Provider>
  );
}

export const GlobalStore = () => {
  return useContext(AppContext);
};

export default AppProvider;
