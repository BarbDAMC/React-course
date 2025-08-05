import { ACTION_TYPES, type actionInterface, type todoInterface } from "./interfaces";

export const todoReducer = (initialState: todoInterface[], action: actionInterface) => {

  switch (action.type) {
    case ACTION_TYPES.ADD_TODO:
      return [...initialState, action.payload]
    
    case ACTION_TYPES.REMOVE_TODO:
      return initialState.filter((state) => state.id !== action.payload.id)
    
    case ACTION_TYPES.TOGGLE_TODO:
      return initialState.map((state) => {
        if (state.id === action.payload.id) {
          return {
            ...state,
            done: !state.done
          }
        }

        return state;
      })
  
    default:
      return initialState;
  }

}