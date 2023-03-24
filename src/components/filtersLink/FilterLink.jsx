// ROUTER
import { NavLink, useParams } from "react-router-dom";

// STYLES
import styles from "./filtersLink.module.css";

const FilterLink = () => {
  const { filter } = useParams();

  return (
    <div className={styles.content}>
      <NavLink
        to="/all"
        className={`${styles.link} ${filter === "all" ? styles.isActive : ""}`}
      >
        All
      </NavLink>
      <NavLink
        to="/active"
        className={`${styles.link} ${
          filter === "active" ? styles.isActive : ""
        }`}
      >
        Active
      </NavLink>
      <NavLink
        to="/completed"
        className={`${styles.link} ${
          filter === "completed" ? styles.isActive : ""
        }`}
      >
        Completed
      </NavLink>
    </div>
  );
};

export default FilterLink;
