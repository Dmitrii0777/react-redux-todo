// ROUTER
import { useParams } from "react-router-dom";

// REDUX
import { useSelector, useDispatch } from "react-redux";

// LIBRARY
import { Reorder, AnimatePresence } from "framer-motion";

// COMPONENTS
import { TodoItem } from "@components/todoItem";
import { FiltersTodo } from "@components/filtersTodo/FiltersTodo";

// STORE
import { setDragAndDrop } from "@store/todos/todos-actions";

// STYLES
import styles from "./todoList.module.css";
import { useMemo } from "react";

export const TodoList = () => {
  const { filter } = useParams();

  const dispatch = useDispatch();
  const allTodos = useSelector((state) => state.todos.todos);

  const filterTodos = useMemo(() => {
    if (filter === "all") {
      return allTodos;
    } else if (filter === "active") {
      return allTodos.filter((item) => !item.completed);
    } else if (filter === "completed") {
      return allTodos.filter((item) => item.completed);
    } else {
      return allTodos;
    }
  }, [allTodos, filter]);

  function setTodoList(newValue) {
    if (filter === "all") {
      dispatch(setDragAndDrop(newValue));
    }
  }

  return (
    <section className={styles.todo}>
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
      <FiltersTodo todos={filterTodos} />
    </section>
  );
};
