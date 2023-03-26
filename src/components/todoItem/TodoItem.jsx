// REDUX
import { useSelector, useDispatch } from "react-redux";

// LIBRARY
import cn from "classnames";
import { Reorder } from "framer-motion";

// PROP-TYPES
import PropTypes from "prop-types";

// COMPONENYS
import { Checkbox } from "@UI/checkbox";
import { DeleteBtn } from "@UI/deleteBtn";

// STORE
import {
  completedTodods,
  removeTodos,
  setMouse,
} from "@store/todos/todos-actions";

// STYLES
import styles from "./todoItem.module.css";

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

export const TodoItem = ({ todo }) => {
  const selectedToDoForDeletion = useSelector(
    (state) => state.todos.selectedToDoForDeletion
  );
  const dispatch = useDispatch();

  const handleMouseEnter = () => dispatch(setMouse(todo.id));

  const handleMouseLeave = () => dispatch(setMouse(null));

  const handleItemFocus = () => dispatch(setMouse(todo.id));

  const handleCheckboxClick = () => dispatch(completedTodods(todo.id));

  const handleCheckboxKeyPress = (event) => {
    if (event.key === " " || event.key === "Enter") {
      dispatch(completedTodods(todo.id));
    }
  };

  const handleCheckboxChange = (event) => {
    dispatch(completedTodods(event.target.checked));
  };

  const handleButtonClick = () => dispatch(removeTodos(todo.text));

  return (
    <Reorder.Item
      tabIndex={0}
      value={todo}
      className={`${styles.item}`}
      onFocus={handleItemFocus}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      {...VARIANT}
    >
      <Checkbox
        completed={todo.completed}
        onClick={handleCheckboxClick}
        onChange={handleCheckboxChange}
        onKeyPress={handleCheckboxKeyPress}
      />
      <div className={styles.elementWrap}>
        <p
          className={cn(styles.textInput, {
            [styles.textDecoration]: todo.completed,
          })}
        >
          {todo.text}
        </p>
        {selectedToDoForDeletion === todo.id && (
          <DeleteBtn onClick={handleButtonClick} onBlur={handleMouseLeave} />
        )}
      </div>
    </Reorder.Item>
  );
};

TodoItem.propTypes = {
  todo: PropTypes.object,
};
