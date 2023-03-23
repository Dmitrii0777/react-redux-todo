export const SET_FILTERS = "@@filters/SET_FILTERS";

export const setFilter = (filter) => ({
  type: SET_FILTERS,
  payload: filter,
});
