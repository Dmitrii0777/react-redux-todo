import { SET_THEME } from "./theme-actions";

import { LIGHT } from "@constants/theme";

export const themeReducer = (state = LIGHT, { type, payload }) => {
  switch (type) {
    case SET_THEME:
      return payload;
    default:
      return state;
  }
};
