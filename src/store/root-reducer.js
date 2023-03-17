import { combineReducers } from "redux";

import { themeReducer } from "./theme/theme-reducer";
import { todoReducer } from "./todos/todos-reducer";
import { filtersReducer } from "./filters/fiters-reducer";

export const rootReducer = combineReducers({
  theme: themeReducer,
  todos: todoReducer,
  filters: filtersReducer,
});
