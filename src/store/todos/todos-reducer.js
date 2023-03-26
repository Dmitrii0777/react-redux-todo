import {
  COMPLETED_TODOS,
  SET_TODOS,
  REMOVE_TODOS,
  SET_DELETE_ITEM,
  CLEAR_COMPLETED,
  SET_DRAG_AND_DROP,
} from "./todos-actions";

const initialState = {
  todos: [],
  selectedToDoForDeletion: null,
};

export const todoReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case SET_TODOS:
      return {
        ...state,
        selectedToDoForDeletion: null,
        todos: [...state.todos, payload],
      };
    case REMOVE_TODOS:
      return {
        ...state,
        selectedToDoForDeletion: null,
        todos: state.todos.filter((todo) => todo.text !== payload),
      };
    case COMPLETED_TODOS:
      return {
        ...state,
        todos: state.todos.map((todo) =>
          todo.id === payload ? { ...todo, completed: !todo.completed } : todo
        ),
      };
    case SET_DELETE_ITEM:
      return {
        ...state,
        selectedToDoForDeletion: payload,
      };
    case CLEAR_COMPLETED:
      return {
        ...state,
        todos: state.todos.map((todo) => ({ ...todo, completed: false })),
      };
    case SET_DRAG_AND_DROP:
      return {
        ...state,
        todos: payload,
      };
    default:
      return state;
  }
};
