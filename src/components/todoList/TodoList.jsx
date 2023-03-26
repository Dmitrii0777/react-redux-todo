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
import { setDragAndDrop } from "@store/todos/todos-actions";

// CONSTANTS
import { FILTERS_STATE } from "@constants/constants";

// STYLES
import styles from "./todoList.module.css";

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
              <TodoItem key={todo.id} todo={todo} />
            ))}
          </AnimatePresence>
        </Reorder.Group>
      ) : (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.2 }}
        >
          <PlugIcon />
        </motion.div>
      )}
      <FiltersTodo todos={filterTodos} />
    </section>
  );
};
