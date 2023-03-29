// PROP-TYPES
import PropTypes from "prop-types";

// LIBRARY
import cn from "classnames";

// ICON
import { ReactComponent as Check } from "@assets/images/icon-check.svg";

// STYLES
import styles from "./checkbox.module.css";

export const Checkbox = ({ onChange, onClick, onKeyPress, completed }) => (
  <>
    <label className={styles.check}>
      <input
        checked={completed}
        type="checkbox"
        className={styles.checkInput}
        onChange={onChange}
        onKeyPress={onKeyPress}
      />
      <div className={styles.gradient}>
        <span
          className={cn(styles.checkBox, { [styles.show]: completed })}
          onClick={onClick}
        >
          {completed && <Check />}
        </span>
      </div>
    </label>
  </>
);

Checkbox.propTypes = {
  onChange: PropTypes.func.isRequired,
  completed: PropTypes.bool.isRequired,
  onClick: PropTypes.func.isRequired,
  onKeyPress: PropTypes.func.isRequired,
};
