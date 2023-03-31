// REACT
import { useMemo } from "react";

// REDUX
import { useSelector, useDispatch } from "react-redux";
import { setDragAndDrop, setMouse } from "@store/todos/todos-actions";

// LIBRARY
import { Reorder, AnimatePresence, motion } from "framer-motion";
import { useParams } from "react-router-dom";

// MODULES
import { TodoItem } from "@components/todoItem";
import { FiltersTodo } from "@components/filtersTodo";
import { TextDescription } from "@components/textDescription";
import { FILTERS_STATE } from "@constants/filters";
import { getChangeLocation } from "@services/getChangeLocation";

// STYLES
import styles from "./todoList.module.css";

const VARIANT = {
  initial: {
    opacity: 0,
    height: 0,
  },
  animate: {
    opacity: 1,
    height: "auto",
  },
  exit: {
    opacity: 0,
    height: 0,
  },
};

export const TodoList = () => {
  const { filter } = useParams();

  const dispatch = useDispatch();
  const allTodos = useSelector((state) => state.todos.todos);

  const filterTodos = useMemo(() => {
    if (filter === FILTERS_STATE.ALL) {
      return allTodos;
    } else if (filter === FILTERS_STATE.ACTIVE) {
      return allTodos.filter((item) => !item.completed);
    } else if (filter === FILTERS_STATE.COMPLETED) {
      return allTodos.filter((item) => item.completed);
    } else {
      return allTodos;
    }
  }, [allTodos, filter]);

  function setTodoList(newValue) {
    const location = getChangeLocation(filter);

    if (location === FILTERS_STATE.ALL) {
      dispatch(setDragAndDrop(newValue));
    }
  }

  const handleMouseEnter = (id) => dispatch(setMouse(id));
  const handleItemFocus = (id) => dispatch(setMouse(id));
  const handleMouseLeave = () => dispatch(setMouse(null));

  return (
    <section className={styles.todo}>
      {allTodos.length > 0 ? (
        <Reorder.Group
          as="ol"
          axis="y"
          values={filterTodos}
          onReorder={setTodoList}
          className={styles.list}
        >
          <AnimatePresence initial={false}>
            {filterTodos.map((todo) => (
              <Reorder.Item
                tabIndex={0}
                key={todo.id}
                value={todo}
                className={styles.item}
                onFocus={() => handleItemFocus(todo.id)}
                onMouseEnter={() => handleMouseEnter(todo.id)}
                onMouseLeave={handleMouseLeave}
                {...VARIANT}
              >
                <TodoItem
                  completed={todo.completed}
                  id={todo.id}
                  text={todo.text}
                />
              </Reorder.Item>
            ))}
          </AnimatePresence>
        </Reorder.Group>
      ) : (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
        >
          <TextDescription />
        </motion.div>
      )}
      <FiltersTodo todos={filterTodos} />
    </section>
  );
};
