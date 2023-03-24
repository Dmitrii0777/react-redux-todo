// REACT
import React, { useEffect, useState } from "react";

// REDUX
import { useDispatch } from "react-redux";

// PROP-TYPES
import PropTypes from "prop-types";

// COMPONENTS
import FilterLink from "@components/filtersLink";

// STORE
import { clearCompleted } from "@store/todos/todos-actions";

// STYLES
import styles from "./filtersTodo.module.css";

const FiltersTodo = ({ todos }) => {
  const [isDesktop, setIsDesktop] = useState(window.innerWidth < 576);
  const dispatch = useDispatch();

  const handleResize = () => setIsDesktop(window.innerWidth < 576);

  useEffect(() => {
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleButtonClick = () => {
    dispatch(clearCompleted());
  };

  return (
    <>
      <div className={styles.filter}>
        <div className={styles.counter}>{todos.length} items left</div>
        {!isDesktop && <FilterLink />}
        <button className={styles.clear} onClick={handleButtonClick}>
          Clear Completed
        </button>
      </div>
      {isDesktop && (
        <div className={styles.linksBottom}>
          <div className={styles.linksWrapper}>
            <FilterLink />
          </div>
        </div>
      )}
    </>
  );
};

export default FiltersTodo;

FiltersTodo.propTypes = {
  todos: PropTypes.array,
};
