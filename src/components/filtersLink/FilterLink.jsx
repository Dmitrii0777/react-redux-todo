// ROUTER
import { NavLink } from "react-router-dom";

// STYLES
import styles from "./filtersLink.module.css";

export const FilterLink = () => {
  const activeStyle = ({ isActive }) => ({
    color: isActive ? "var(--active-link)" : null,
  });

  return (
    <div className={styles.content}>
      <NavLink to="/" className={styles.link} style={activeStyle}>
        All
      </NavLink>
      <NavLink to="/active" className={styles.link} style={activeStyle}>
        Active
      </NavLink>
      <NavLink to="/completed" className={styles.link} style={activeStyle}>
        Completed
      </NavLink>
    </div>
  );
};
