// REDUX
import { useSelector, useDispatch } from "react-redux";

// LIBRARY
import { Reorder } from "framer-motion";

// PROP-TYPES
import PropTypes from "prop-types";

// COMPONENYS
import { Checkbox } from "@UI/checkbox/Checkbox";
import { DeleteBtn } from "@UI/deleteBtn/DeleteBtn";

// STORE
// import { selectTodods } from "store/todos/todos-selectors";
import {
  completedTodods,
  removeTodos,
  setMouseLeave,
} from "@store/todos/todos-actions";

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
  const btnDelete = useSelector((state) => state.todos.btnDelete);
  const dispatch = useDispatch();

  const { completed, id, text } = todo;

  const handleMouseLeave = (id) => {
    dispatch(setMouseLeave(id));
  };

  const handleCheckboxKeyPress = (event) => {
    if (event.key === " " || event.key === "Enter") {
      dispatch(completedTodods(id));
    }
  };

  const handleCheckboxChange = (event) => {
    dispatch(completedTodods(event.target.checked));
  };

  return (
    <Reorder.Item
      {...variants}
      tabIndex={0}
      value={todo}
      className={`${styles.item}`}
      onFocus={() => handleMouseLeave(id)}
      onMouseEnter={() => handleMouseLeave(id)}
      onMouseLeave={() => handleMouseLeave(null)}
    >
      <Checkbox
        completed={completed}
        onClick={() => dispatch(completedTodods(id))}
        onChange={handleCheckboxChange}
        onKeyPress={handleCheckboxKeyPress}
      />
      <div className={styles.elementWrap}>
        <p
          className={`${styles.textInput} ${
            completed ? styles.textDecoration : ""
          }`}
        >
          {text}
        </p>
        {btnDelete === id && (
          <DeleteBtn
            onClick={() => dispatch(removeTodos(text))}
            onBlur={() => handleMouseLeave(null)}
          />
        )}
      </div>
    </Reorder.Item>
  );
};

TodoItem.propTypes = {
  todo: PropTypes.object,
};
