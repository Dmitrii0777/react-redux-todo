// ROUTER
import { NavLink, useParams } from "react-router-dom";

// LIBRARY CLASSNAMES
import cn from "classnames";

// CONSTANTS
import { FILTERS_STATE } from "@constants/filters";

// STYLES
import styles from "./filtersLink.module.css";

export const FilterLink = () => {
  const { filter } = useParams();

  return (
    <div className={styles.content}>
      <NavLink
        to={`/${FILTERS_STATE.ALL}`}
        className={cn(styles.link, {
          [styles.isActive]: filter === FILTERS_STATE.ALL,
        })}
      >
        All
      </NavLink>
      <NavLink
        to={`/${FILTERS_STATE.ACTIVE}`}
        className={cn(styles.link, {
          [styles.isActive]: filter === FILTERS_STATE.ACTIVE,
        })}
      >
        Active
      </NavLink>
      <NavLink
        to={`/${FILTERS_STATE.COMPLETED}`}
        className={cn(styles.link, {
          [styles.isActive]: filter === FILTERS_STATE.COMPLETED,
        })}
      >
        Completed
      </NavLink>
    </div>
  );
};
