import { ReactComponent as Close } from "../../assets/images/icon-cross.svg";

import styles from "./deleteBtn.module.css";

export const DeleteBtn = ({ id, btnDelete, onClick }) => {
  return (
    <>
      <button
        className={styles.delete_todo}
        style={{
          transform: btnDelete === id && "translateY(-50%) scale(1)",
          transition: "transform 0.2s ease-in-out",
        }}
        onClick={onClick}
      >
        <Close />
      </button>
    </>
  );
};
