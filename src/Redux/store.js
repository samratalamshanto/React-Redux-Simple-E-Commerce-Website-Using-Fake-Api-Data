import { createStore } from "redux";
import reducer from "./reducers/index.js";

//createStore takes many arguments----(reducers,middleware,state )

const store = createStore(reducer,{},//empty state
      window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),// redux devtool extention
      );  

export default store;
