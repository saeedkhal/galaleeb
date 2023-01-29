import React, { createContext, useContext, useEffect, useReducer } from "react";
import reducer from "../reducer/reducer";
import { OPEN_SIDE_BAR, CLOSE_SIDE_BAR, UPDATEUSER } from "../assets/contsntants/constants";
import { getProducts, getChannels, getcategoryies } from "../actions";
import { useAlert } from 'react-alert'

import { signInWithPopup, onAuthStateChanged } from "firebase/auth";
import { auth, provider } from '../firebase-auth/firebase'

export const AppContext = createContext();
const initialState = {
  isSidebarOpen: true,
  products: [],
  featuredProduct: [],
  isLoading: true,
  filteredProducts: [],
  channels: [],
  categoryies: [],
  product: {},
  cart: !localStorage.getItem('cart')?.length ? [] : JSON.parse(localStorage.getItem('cart')),
  user: {},
};


const AppProvider = ({ children }) => {
  const alert = useAlert()

  const [state, dispatch] = useReducer(reducer, initialState);
  const OpenSidebar = () => {
    dispatch({ type: OPEN_SIDE_BAR });
  };
  const CloseSideBar = () => {
    dispatch({ type: CLOSE_SIDE_BAR });
  };

  const signInwithGoogle = () => {
    signInWithPopup(auth, provider)
      .then((result) => {
        // user logged in 
        alert.success('you are logged in successfuly')
      }).catch((err) => {
        console.log(err)

      });
  }

  const logOut = () => {
    auth.signOut().then(() => {
      //  user loged out 
      alert.success('you are logged out')
    }).catch((err) => {
      console.log(err)
    })
  }



  useEffect(() => {
    getProducts(dispatch);
    getChannels(dispatch);
    getcategoryies(dispatch);
  }, []);
  useEffect(() => {
    const unsubscrib = onAuthStateChanged(auth, (user) => {
      if (user) {
        dispatch({
          type: UPDATEUSER,
          payload: user,
        })
      } else {
        dispatch({
          type: UPDATEUSER,
          payload: {},
        })
      }
    });
    return unsubscrib
  }, [])
  return (
    <AppContext.Provider
      value={{ ...state, OpenSidebar, CloseSideBar, dispatch, signInwithGoogle, logOut }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useContextProvider = () => {
  return useContext(AppContext);
};

export default AppProvider;


