import types from '../actions/types';
import produce from 'immer';

const todo = [];
export default (state = todo, action) => {
  switch (action.type) {
    case types.INSERT_TODO:
      for(var i = 0 ; i < state.length ; i ++) {
        if (state[i].key == action.payload.key) return state;
      }
      return [...state, action.payload];
    case types.DELETE_TODO:
      return state;
    case types.CLEAR_TODO:
      return [];
    case types.PRESS_TODO: 
      return produce(state, draftState => {
        for(var i = 0 ; i < state.length ; i ++) {
          if (state[i].key == action.payload) {
            draftState[i].key = action.payload;
            draftState[i].status = !state[i].status;
          }
        }
      })
    
    default:
      return state;
  }
};