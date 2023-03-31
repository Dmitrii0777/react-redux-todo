// REACT
import { useEffect, useState } from "react";

// REDUX
import { useDispatch } from "react-redux";
import { clearCompleted } from "@store/todos/todos-actions";

// LIBRARY
import PropTypes from "prop-types";

// MODULES
import { FilterLink } from "@components/filtersLink";

// STYLES
import styles from "./filtersTodo.module.css";

const MAX_MOBILE_WIDTH = 576;

export const FiltersTodo = ({ todos }) => {
  const [isDesktop, setIsDesktop] = useState(
    window.innerWidth < MAX_MOBILE_WIDTH
  );
  const dispatch = useDispatch();

  useEffect(() => {
    const handleResize = () =>
      setIsDesktop(window.innerWidth < MAX_MOBILE_WIDTH);
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

FiltersTodo.propTypes = {
  todos: PropTypes.array.isRequired,
};
