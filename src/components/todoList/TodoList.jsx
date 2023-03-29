// REACT
import { useMemo } from "react";

// ROUTER
import { useParams } from "react-router-dom";

// REDUX
import { useSelector, useDispatch } from "react-redux";

// LIBRARY
import { Reorder, AnimatePresence, motion } from "framer-motion";

// COMPONENTS
import { PlugIcon } from "@components/plugIcon";
import { TodoItem } from "@components/todoItem";
import { FiltersTodo } from "@components/filtersTodo";

// STORE
import { setDragAndDrop, setMouse } from "@store/todos/todos-actions";

// CONSTANTS
import { FILTERS_STATE } from "@constants/filters";

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
    if (filter === FILTERS_STATE.ALL) {
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
          <PlugIcon />
        </motion.div>
      )}
      <FiltersTodo todos={filterTodos} />
    </section>
  );
};
