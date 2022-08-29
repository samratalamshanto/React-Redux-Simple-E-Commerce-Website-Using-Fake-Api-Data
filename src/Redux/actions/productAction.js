import { ActionTypes } from "../constants/constants.js";
import axios from "axios";
//action return object of type and payload
export const setProducts = () => async (dispatch) => {
  try {
    const response = await axios.get("https://fakestoreapi.com/products").catch((err) => console.log(err));
    dispatch({
      //object
      type: ActionTypes.SET_PRODUCTS,
      payload: response.data,  //set value or data in payload
    })

  } catch (error) {
    console.log(error);
  }


};

export const selectedProduct = (productId) => async (dispatch) => {

  try {

    const response = await axios.get(`https://fakestoreapi.com/products/${productId}`).catch((err) => console.log(err));
    dispatch({
      //object
      type: ActionTypes.SELECTED_PRODUCT,
      payload: response.data,
    });


  } catch (error) {
    console.log(error)
  }

};

export const removeSelectedReducer = () => {
  return {
    type: ActionTypes.REMOVED_SELECTED_PRODUCT,
    //no payload returned
  }
}