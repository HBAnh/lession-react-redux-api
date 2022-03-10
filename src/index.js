import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import { createStore, applyMiddleware, compose } from "redux";
import appReducers from "./reducers/index";
import { Provider } from "react-redux";
import Routers from "./Routers";
import thunk from "redux-thunk";

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
    appReducers,
    composeEnhancer( applyMiddleware(thunk) )
  );

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>f
      <Routers />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);

reportWebVitals();
