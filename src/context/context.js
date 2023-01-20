import React, { createContext, useContext, useEffect, useReducer } from "react";
import reducer from "../reducer/reducer";
import { OPEN_SIDE_BAR, CLOSE_SIDE_BAR } from "../assets/contsntants/constants";
import { getProducts, getChannels, getcategoryies } from "../actions";
export const AppContext = createContext();
const initialState = {
  isSidebarOpen: true,
  products: [],
  featuredProduct: [],
  isLoading: true,
  filteredProducts: [],
  channels: [],
  categoryies: [],
};
const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const OpenSidebar = () => {
    dispatch({ type: OPEN_SIDE_BAR });
  };
  const CloseSideBar = () => {
    dispatch({ type: CLOSE_SIDE_BAR });
  };
  useEffect(() => {
    getProducts(dispatch);
    getChannels(dispatch);
    getcategoryies(dispatch);
  }, []);
  return (
    <AppContext.Provider
      value={{ ...state, OpenSidebar, CloseSideBar, dispatch }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useContextProvider = () => {
  return useContext(AppContext);
};

export default AppProvider;
