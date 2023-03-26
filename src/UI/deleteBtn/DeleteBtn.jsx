// PROP-TYPES
import PropTypes from "prop-types";

// ICON
import { ReactComponent as Close } from "@assets/images/icon-cross.svg";

// STYLES
import styles from "./deleteBtn.module.css";

export const DeleteBtn = ({ onClick, onBlur }) => (
  <>
    <button
      className={`${styles.deleteTodo} `}
      onClick={onClick}
      onBlur={onBlur}
    >
      <Close />
    </button>
  </>
);

DeleteBtn.propTypes = {
  onClick: PropTypes.func,
  onBlur: PropTypes.func,
};
