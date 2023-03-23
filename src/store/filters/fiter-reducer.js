import { SET_FILTERS } from "./filter-actions";

const FILTER_STATES = {
  ALL: "all",
  ACTIVE: "active",
  COMPLETED: "completed",
};

export const filterReducer = (
  state = FILTER_STATES.ACTIVE,
  { type, payload }
) => {
  switch (type) {
    case SET_FILTERS: {
      return payload;
    }
    default:
      return state;
  }
};
