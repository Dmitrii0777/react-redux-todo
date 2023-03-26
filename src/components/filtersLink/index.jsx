// ROUTER
import { NavLink, useParams } from "react-router-dom";

// CONSTANTS
import { FILTERS_STATE } from "@constants/constants";

// STYLES
import styles from "./filtersLink.module.css";

export const FilterLink = () => {
  const { filter } = useParams();

  return (
    <div className={styles.content}>
      <NavLink
        to={`/${FILTERS_STATE.ALL}`}
        className={`${styles.link} ${
          filter === FILTERS_STATE.ALL ? styles.isActive : ""
        }`}
      >
        All
      </NavLink>
      <NavLink
        to={`/${FILTERS_STATE.ACTIVE}`}
        className={`${styles.link} ${
          filter === FILTERS_STATE.ACTIVE ? styles.isActive : ""
        }`}
      >
        Active
      </NavLink>
      <NavLink
        to={`/${FILTERS_STATE.COMPLETED}`}
        className={`${styles.link} ${
          filter === FILTERS_STATE.COMPLETED ? styles.isActive : ""
        }`}
      >
        Completed
      </NavLink>
    </div>
  );
};
