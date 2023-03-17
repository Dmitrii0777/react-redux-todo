import { useState } from "react";
import { useDispatch } from "react-redux";

import { setTodods } from "../../store/todos/todos-actions";
import { Checkbox } from "../../UI/checkbox/Checkbox";

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

  return (
    <section className={styles.new_todo}>
      <div className="container ">
        <form onSubmit={handleSubmit}>
          <div className={styles.wrapper}>
            <Checkbox
              completed={completed}
              onChange={(event) => setCompleted(event.target.checked)}
              onKeyPress={(e) => {
                if (e.key === "Enter") {
                  handleSubmit(e);
                }
              }}
            />
            <input
              type="text"
              value={text}
              className={styles.text_input}
              placeholder="Create a new todo..."
              onChange={(event) => setText(event.target.value)}
            />
          </div>
        </form>
      </div>
    </section>
  );
};
