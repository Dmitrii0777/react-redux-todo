import { FILTERS_STATE } from "../constants/filters";

export const getChangeLocation = (url) =>
  url === "/" ? `/${FILTERS_STATE.ACTIVE}` : url;
