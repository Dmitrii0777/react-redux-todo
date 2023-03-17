import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";

import { FilterLink } from "../filtersLink/FilterLink";
import { clearCompleted } from "../../store/todos/todos-actions";

import styles from "./filtersTodo.module.css";

export const FiltersTodo = ({ todos }) => {
  const [isDesktop, setIsDesktop] = useState(window.innerWidth < 576);
  const dispatch = useDispatch();

  useEffect(() => {
    const handleResize = () => setIsDesktop(window.innerWidth < 576);
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <>
      <div className={styles.filter}>
        <div className={styles.counter}>{todos.length} items left</div>
        {!isDesktop && <FilterLink />}
        <button
          className={styles.clear}
          onClick={() => dispatch(clearCompleted())}
        >
          Clear Completed
        </button>
      </div>
      {isDesktop && (
        <div className={styles.link_mb}>
          <div className={styles.link_wrapper}>
            <FilterLink styles={styles} />
          </div>
        </div>
      )}
    </>
  );
};
