// REDUX
import { useSelector, useDispatch } from "react-redux";
import {
  completedTodods,
  removeTodos,
  setMouse,
} from "@store/todos/todos-actions";

// LIBRARY
import PropTypes from "prop-types";
import cn from "classnames";

// MODULES
import { Checkbox } from "@UI/checkbox";
import { DeleteBtn } from "@UI/deleteBtn";

// STYLES
import styles from "./todoItem.module.css";

export const TodoItem = ({ completed, id, text }) => {
  const selectedToDoForDeletion = useSelector(
    (state) => state.todos.selectedToDoForDeletion
  );
  const dispatch = useDispatch();

  const handleMouseLeave = () => dispatch(setMouse(null));

  const handleCheckboxClick = () => dispatch(completedTodods(id));

  const handleCheckboxKeyPress = (event) => {
    if (event.key === " " || event.key === "Enter") {
      dispatch(completedTodods(id));
    }
  };

  const handleCheckboxChange = (event) => {
    dispatch(completedTodods(event.target.checked));
  };

  const handleButtonClick = () => dispatch(removeTodos(text));

  return (
    <>
      <Checkbox
        completed={completed}
        onClick={handleCheckboxClick}
        onChange={handleCheckboxChange}
        onKeyPress={handleCheckboxKeyPress}
      />
      <div className={styles.elementWrap}>
        <p
          className={cn(styles.textInput, {
            [styles.textDecoration]: completed,
          })}
        >
          {text}
        </p>
        {selectedToDoForDeletion === id && (
          <DeleteBtn onClick={handleButtonClick} onBlur={handleMouseLeave} />
        )}
      </div>
    </>
  );
};

TodoItem.propTypes = {
  completed: PropTypes.bool.isRequired,
  text: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
};
