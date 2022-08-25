import { combineReducers } from "redux";

import { productReducer, selectedProductReducer } from "./productReducer.js";
import { HandelCartReducer } from "./cartReducer"
const reducer = combineReducers({
  //object type
  // key: value------key name can be anything what we want
  allProducts: productReducer,
  singleProduct: selectedProductReducer,
  HandelCartReducer: HandelCartReducer,
});

export default reducer; // not functions thats why need export default
