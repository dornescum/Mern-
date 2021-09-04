 import React  from "react";
import ReactDOM from "react-dom";
import {Provider} from 'react-redux';
import {createStore, applyMiddleware, compose} from "redux";
import thunk from "redux-thunk";
import reducers from './reducers';

 import App from "./App";
 // are nevoie de 2 lucruri : 1 reducers si 2 compose()
 const store =createStore(reducers, compose(applyMiddleware(thunk)))


ReactDOM.render(<App />, document.getElementById("root"));