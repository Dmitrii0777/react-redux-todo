// PROP-TYPES
import PropTypes from "prop-types";

// ICON
import { ReactComponent as Check } from "assets/images/icon-check.svg";

// STYLES
import styles from "./checkbox.module.css";

export const Checkbox = ({ onChange, onClick, onKeyPress, completed }) => (
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
        className={`${styles.check_box} ${completed ? styles.show : ""}`}
        onClick={onClick}
      >
        {completed ? <Check /> : null}
      </span>
    </label>
  </>
);

Checkbox.propTypes = {
  onChange: PropTypes.func,
  onClick: PropTypes.func,
  onKeyPress: PropTypes.func,
  completed: PropTypes.bool,
};
