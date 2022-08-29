import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import reducer from "./reducers/index.js";
import { composeWithDevTools } from "redux-devtools-extension";

//createStore takes many arguments----(reducers,middleware,state )

const store = createStore(reducer, {},
    composeWithDevTools(applyMiddleware(thunk)),//apply middleware thunk
    //       window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),// redux devtool extention
);

export default store;
