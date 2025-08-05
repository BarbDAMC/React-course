
export const ACTION_TYPES = {
  ADD_TODO: '[TODO] Add Todo',
  REMOVE_TODO: '[TODO] Remove Todo',
  TOGGLE_TODO: '[TODO] Toogle Todo',
} as const;

export interface todoInterface {
  id: number,
  description: string,
  done: boolean
}

export interface actionInterface {
  type: string,
  payload: todoInterface
}