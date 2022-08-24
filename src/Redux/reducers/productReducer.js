import { ActionTypes } from "../constants/constants.js";

const initialState = {
  products: [],
};

//reducer take 2 things : initial state and action(type,payload) as parameter

// reducer------state && action
export const productReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case ActionTypes.SET_PRODUCTS:
      return {
        ...initialState, products: payload
      };

    default:
      return initialState;
  }
};

export const selectedProductReducer = (state = {}, { type, payload }) => {
  //2 action are in one reducer
  //selected reducer + removed reducer
  // in same switch case
  switch (type) {
    case ActionTypes.SELECTED_PRODUCT:
      return {
        ...state, ...payload
      };
    case ActionTypes.REMOVED_SELECTED_PRODUCT:
      return {};

    default:
      return state;
  }
}

