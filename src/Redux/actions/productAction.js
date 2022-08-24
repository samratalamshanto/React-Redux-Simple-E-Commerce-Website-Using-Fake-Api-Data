import { ActionTypes } from "../constants/constants.js";
//action return object of type and payload
export const setProducts = (products) => {
  return {
    //object
    type: ActionTypes.SET_PRODUCTS,
    payload: products,  //set value or data in payload
  };
};

export const selectedProduct = (product) => {
  return {
    //object
    type: ActionTypes.SELECTED_PRODUCT,
    payload: product,
  };
};

export const removeSelectedReducer = () => {
  return {
    type: ActionTypes.REMOVED_SELECTED_PRODUCT,
    //no payload returned
  }
}