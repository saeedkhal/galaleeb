import {
  UPDATE_PRODUCTS,
  CLOSE_SIDE_BAR,
  OPEN_SIDE_BAR,
  UPDATE_ISLOADING,
  UPDATE_ERR,
} from '../assets/contsntants/constants';
const reducer = (state, action) => {
  switch (action.type) {
    case OPEN_SIDE_BAR:
      return { ...state, isSidebarOpen: true };
    case CLOSE_SIDE_BAR:
      return { ...state, isSidebarOpen: false };
    case UPDATE_PRODUCTS:
      return {
        ...state,
        products: action.payload,
      };
    case UPDATE_ISLOADING:
      return { ...state, isLoading: action.payload };
    case UPDATE_ERR:
      return { ...state, err: true };
    default:
      return state;
  }
};
export default reducer;
