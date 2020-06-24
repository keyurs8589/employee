import { createStore, applyMiddleware } from 'redux';
import empReducer from './empReducer';
import thunk from 'redux-thunk';
const store = createStore(empReducer, undefined, applyMiddleware(thunk));
export default store;
