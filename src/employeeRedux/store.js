import { createStore, applyMiddleware } from 'redux';
import empReducer from './empReducer';
import thunk from 'redux-thunk';
const store = createStore(empReducer, applyMiddleware(thunk));
export default store;
