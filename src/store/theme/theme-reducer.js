import { SET_THEME } from "./theme-actions";

const THEME_STATES = {
  LIGHT: "light",
  DARK: "dark",
};

export const themeReducer = (state = THEME_STATES.LIGHT, { type, payload }) => {
  switch (type) {
    case SET_THEME:
      return payload;
    default:
      return state;
  }
};
