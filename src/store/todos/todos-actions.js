export const SET_TODOS = "@@todos/SET_TODOS";
export const REMOVE_TODOS = "@@todos/REMOVE_TODOS";
export const COMPLETED_TODOS = "@@todos/COMPLETED_TODOS";
// export const SET_MOUSE_ENTER = "@@todos/SET_MOUSE_ENTER";
export const SET_MOUSE_LEAVE = "@@todos/SET_MOUSE_LEAVE";
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

// export const setMouseEnter = (id) => ({
//   type: SET_MOUSE_ENTER,
//   payload: id,
// });

export const setMouseLeave = (type) => ({
  type: SET_MOUSE_LEAVE,
  payload: type,
});

export const clearCompleted = () => ({
  type: CLEAR_COMPLETED,
});

export const setDragAndDrop = (drop) => ({
  type: SET_DRAG_AND_DROP,
  payload: drop,
});
