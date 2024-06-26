import {
  UPDATE_PRODUCTS,
  CLOSE_SIDE_BAR,
  OPEN_SIDE_BAR,
  UPDATE_ISLOADING,
  UPDATE_ERR,
  UPDATE_FILTERED_PRODUCTS,
  UPDATE_CHANNELS,
  UPDATE_CATEGORIES,
  GET_ONE_PRODUCT,
  UPDATE_CART,
  UPDATEUSER,
  FILTER_COLOR,
  GET_FEATURED_PRODUCTS
} from "../assets/contsntants/constants";
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
        filteredProducts: action.payload,
      };
    case UPDATE_ISLOADING:
      return { ...state, isLoading: action.payload };
    case UPDATE_ERR:
      return { ...state, err: true };
    case UPDATE_FILTERED_PRODUCTS:
      return {
        ...state,
        filteredProducts: action.payload,
      };
    case UPDATE_CHANNELS:
      return {
        ...state,
        channels: action.payload,
      };
    case UPDATE_CATEGORIES:
      return {
        ...state,
        categoryies: action.payload,
      };
    case GET_ONE_PRODUCT:
      return {
        ...state,
        product: action.payload
      }
    case UPDATE_CART: {
      localStorage.setItem('cart', JSON.stringify(action?.payload));
      return {
        ...state,
        cart: action?.payload
      }
    }
    case UPDATEUSER: {
      return {
        ...state,
        user: action.payload
      }
    }
    case FILTER_COLOR: {
      return {
        ...state,
        filterColor: action.payload
      }
    }
    case GET_FEATURED_PRODUCTS: {
      return {
        ...state,
        featuredProducts: action.payload?.records
      }
    }
    
    default:
      return state;
  }
};
export default reducer;
