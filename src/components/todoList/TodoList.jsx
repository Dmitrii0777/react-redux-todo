// ROUTER
import { useParams, useLocation } from "react-router-dom";

// REDUX
import { useSelector, useDispatch } from "react-redux";

// LIBRARY
import { Reorder, AnimatePresence } from "framer-motion";

// COMPONENTS
import { TodoItem } from "@components/todoItem";
import { FiltersTodo } from "@components/filtersTodo/FiltersTodo";

// STORE
import { selectVisibleTodos } from "@store/todos/todos-selectors";
import { setDragAndDrop } from "@store/todos/todos-actions";

// STYLES
import styles from "./todoList.module.css";

export const TodoList = () => {
  const { filter } = useParams();
  const location = useLocation();

  const dispatch = useDispatch();
  const todos = useSelector((state) => selectVisibleTodos(state, filter));

  function setTodoList(newValue) {
    const loc = location.pathname === "/" ? "/all" : location.pathname;

    if (loc === "/all") {
      dispatch(setDragAndDrop(newValue));
    }
  }

  return (
    <section className={styles.todo}>
      <Reorder.Group
        as="ol"
        axis="y"
        values={todos}
        onReorder={setTodoList}
        className={styles.list}
      >
        <AnimatePresence initial={false}>
          {todos.map((todo) => (
            <TodoItem key={todo.id} todo={todo} />
          ))}
        </AnimatePresence>
      </Reorder.Group>
      <FiltersTodo todos={todos} />
    </section>
  );
};
