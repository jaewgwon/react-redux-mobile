import { combineReducers } from 'redux';
import CountReducer from './countReducer';
import TodoReducer from './todoReducer';

export default combineReducers({
  count: CountReducer,
  todo: TodoReducer
});