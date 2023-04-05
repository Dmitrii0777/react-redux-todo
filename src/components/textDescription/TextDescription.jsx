// STYLES
import styles from "./TextDescription.module.css";

export const TextDescription = () => {
  return (
    <div className={styles.content}>
      <h1 className={styles.title}>There is nothing here</h1>
      <p className={styles.description}>
        Create an todo by clicking the New create todo and get started
      </p>
    </div>
  );
};
