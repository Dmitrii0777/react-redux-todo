import { combineReducers } from "redux";

import { themeReducer } from "./theme/theme-reducer";
import { todoReducer } from "./todos/todos-reducer";

export const rootReducer = combineReducers({
  theme: themeReducer,
  todos: todoReducer,
});
