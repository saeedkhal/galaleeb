import {
  UPDATE_PRODUCTS,
  UPDATE_ISLOADING,
  UPDATE_ERR,
  UPDATE_CHANNELS,
  UPDATE_CATEGORIES,
  GET_ONE_PRODUCT
} from "../assets/contsntants/constants";
import axios from "axios";

export const getProducts = async (dispatch) => {
  try {
    dispatch({ type: UPDATE_ISLOADING, payload: true });
    const res = await axios.get("/Products");
    dispatch({ type: UPDATE_PRODUCTS, payload: res.data.records });
    dispatch({ type: UPDATE_ISLOADING, payload: false });
  } catch (err) {
    dispatch({ type: UPDATE_ERR, payload: true });
  }
};

export const getChannels = async (dispatch) => {
  try {
    dispatch({ type: UPDATE_ISLOADING, payload: true });
    const res = await axios.get("/Channels");
    dispatch({ type: UPDATE_CHANNELS, payload: res.data.records });
    dispatch({ type: UPDATE_ISLOADING, payload: false });
  } catch (err) {
    dispatch({ type: UPDATE_ERR, payload: true });
  }
};
export const getcategoryies = async (dispatch) => {
  try {
    dispatch({ type: UPDATE_ISLOADING, payload: true });
    const res = await axios.get("/Category");
    dispatch({ type: UPDATE_CATEGORIES, payload: res.data.records });
    dispatch({ type: UPDATE_ISLOADING, payload: false });
  } catch (err) {
    dispatch({ type: UPDATE_ERR, payload: true });
  }
};
export const getProduct = async (dispatch, id) => {
  try {
    dispatch({ type: UPDATE_ISLOADING, payload: true });
    const res = await axios.get(`/Products/${id}`);
    dispatch({ type: GET_ONE_PRODUCT, payload: res.data });
    dispatch({ type: UPDATE_ISLOADING, payload: false });
  } catch (err) {
    dispatch({ type: UPDATE_ERR, payload: true });
  }
};
