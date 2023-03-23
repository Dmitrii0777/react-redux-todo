// REACT
import React, { useState } from "react";

// REDUX
import { useDispatch } from "react-redux";

// COMPONENTS
import { Checkbox } from "@UI/checkbox/Checkbox";

// STORE
import { setTodods } from "@store/todos/todos-actions";

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
    <section className={styles.new_todo}>
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
            className={styles.text_input}
            placeholder="Create a new todo..."
            onChange={handleInputChange}
          />
        </div>
      </form>
    </section>
  );
};
