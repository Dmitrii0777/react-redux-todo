export const SET_TODOS = "@@todos/SET_TODOS";
export const REMOVE_TODOS = "@@todos/REMOVE_TODOS";
export const COMPLETED_TODOS = "@@todos/COMPLETED_TODOS";
export const SET_DELETE_ITEM = "@@todos/SET_DELETE_ITEM";
export const CLEAR_COMPLETED = "@@todos/CLEAR_COMPLETED";
export const SET_DRAG_AND_DROP = "@@todos/SET_DRAG_AND_DROP";

export const setTodods = (todos) => ({
  type: SET_TODOS,
  payload: todos,
});

export const removeTodos = (text) => ({
  type: REMOVE_TODOS,
  payload: text,
});

export const completedTodods = (id) => ({
  type: COMPLETED_TODOS,
  payload: id,
});

export const setMouse = (type) => ({
  type: SET_DELETE_ITEM,
  payload: type,
});

export const clearCompleted = () => ({
  type: CLEAR_COMPLETED,
});

export const setDragAndDrop = (drop) => ({
  type: SET_DRAG_AND_DROP,
  payload: drop,
});
