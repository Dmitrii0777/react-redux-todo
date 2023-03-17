import { ReactComponent as Check } from "../../assets/images/icon-check.svg";

import styles from "./checkbox.module.css";

export const Checkbox = ({ onChange, onClick, onKeyPress, completed }) => {
  return (
    <>
      <label className={styles.check}>
        <input
          checked={completed}
          type="checkbox"
          className={styles.check_input}
          onChange={onChange}
          onKeyPress={onKeyPress}
        />
        <span
          className={styles.check_box}
          style={{
            background: completed
              ? "linear-gradient(hsl(192, 100%, 67%), hsl(280, 87%, 65%))"
              : null,
            border: completed ? "none" : null,
          }}
          onClick={onClick}
        >
          {completed ? <Check /> : null}
        </span>
      </label>
    </>
  );
};
