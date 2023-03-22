// STYLES
import styles from "./footer.module.css";

export const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className="container">
        <p className={styles.description}>Drag and drop to reorder list</p>
      </div>
    </footer>
  );
};
