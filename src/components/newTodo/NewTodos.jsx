// REACT
import { useState } from "react";

// REDUX
import { useDispatch } from "react-redux";
import { setTodods } from "@store/todos/todos-actions";

// MODULES
import { Checkbox } from "@UI/checkbox";

// STYLES
import styles from "./newTodo.module.css";

export const NewTodos = () => {
  const [text, setText] = useState("");
  const [completed, setCompleted] = useState(false);

  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!text.trim() || text.trim().length === 0) return;

    dispatch(
      setTodods({
        id: new Date().getTime(),
        text,
        completed,
      })
    );

    setText("");
    setCompleted(false);
  };

  const handleCheckboxChange = (event) => {
    setCompleted(event.target.checked);
  };

  const handleCheckboxKeyPress = (event) => {
    if (event.key === "Enter") {
      handleSubmit(event);
    }
  };

  const handleInputChange = (event) => {
    setText(event.target.value);
  };

  return (
    <section className={styles.newTodo}>
      <form onSubmit={handleSubmit}>
        <div className={styles.wrapper}>
          <Checkbox
            completed={completed}
            onChange={handleCheckboxChange}
            onKeyPress={handleCheckboxKeyPress}
          />
          <input
            type="text"
            value={text}
            className={styles.textInput}
            placeholder="Create a new todo..."
            onChange={handleInputChange}
          />
        </div>
      </form>
    </section>
  );
};
