import types from '../actions/types';

const todo = [];
export default (state = todo, action) => {
  switch (action.type) {
    case types.INSERT_TODO:
      return [...state, action.payload];
    case types.DELETE_TODO:
      return state;
    case types.CLEAR_TODO:
      return [];
    default:
      return state;
  }
};