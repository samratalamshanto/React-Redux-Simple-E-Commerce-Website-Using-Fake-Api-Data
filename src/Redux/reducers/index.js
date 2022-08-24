import { combineReducers } from "redux";

import { productReducer, selectedProductReducer } from "../reducers/productReducer.js";

const reducer = combineReducers({
  //object type
  // key: value------key name can be anything what we want
  allProducts: productReducer,
  singleProduct: selectedProductReducer,
});

export default reducer; // not functions thats why need export default
