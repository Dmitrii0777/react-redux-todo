// REDUX
import { useSelector, useDispatch } from "react-redux";

// LIBRARY
import { Reorder } from "framer-motion";

// COMPONENYS
import { Checkbox } from "UI/checkbox/Checkbox";
import { DeleteBtn } from "UI/deleteBtn/DeleteBtn";

// STORE
import { selectTodods } from "store/todos/todos-selectors";
import {
  completedTodods,
  removeTodos,
  setMouseEnter,
  setMouseLeave,
} from "store/todos/todos-actions";

// STYLES
import styles from "./todoItem.module.css";

const variants = {
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

export const TodoItem = ({ todo }) => {
  const { btnDelete } = useSelector(selectTodods);
  const dispatch = useDispatch();

  const { completed, id, text } = todo;

  const handleMouseEnter = (id) => {
    dispatch(setMouseEnter(id));
  };

  const handleMouseLeave = (id) => {
    dispatch(setMouseLeave(id));
  };

  return (
    <Reorder.Item
      tabIndex={0}
      value={todo}
      {...variants}
      className={styles.item}
      onFocus={() => handleMouseEnter(id)}
      onMouseEnter={() => handleMouseEnter(id)}
      onMouseLeave={() => handleMouseLeave(null)}
    >
      <Checkbox
        completed={completed}
        onClick={() => dispatch(completedTodods(id))}
        onChange={(event) => dispatch(completedTodods(event.target.checked))}
        onKeyPress={(e) => {
          if (e.key === " " || e.key === "Enter") {
            dispatch(completedTodods(id));
          }
        }}
      />
      <div className={styles.element_wrap}>
        <p
          className={styles.text_input}
          style={{
            textDecoration: completed && "line-through",
          }}
        >
          {text}
        </p>
        <DeleteBtn
          id={id}
          btnDelete={btnDelete}
          onClick={() => dispatch(removeTodos(text))}
        />
      </div>
    </Reorder.Item>
  );
};
