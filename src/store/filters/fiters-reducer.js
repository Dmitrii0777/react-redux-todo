import { SET_FILTERS } from "./filters-actions";

export const filtersReducer = (state = "all", { type, payload }) => {
  switch (type) {
    case SET_FILTERS: {
      return payload;
    }
    default:
      return state;
  }
};
