import { createStore, applyMiddleware } from "redux";
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import rootReducers from "../reducers/index";
import { composeWithDevTools } from 'redux-devtools-extension';
const composeEnhancers = composeWithDevTools({
    // options like actionSanitizer, stateSanitizer
  });
  const store = createStore(rootReducers, { }, composeEnhancers(
    applyMiddleware(thunk,logger)));
export default store;
