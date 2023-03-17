import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import { setTheme } from "../../store/theme/theme-actions";

import styles from "./header.module.css";

export const Header = () => {
  const dispatch = useDispatch();
  const theme = useSelector((state) => state.theme);

  const toggleTheme = () => {
    dispatch(setTheme(theme === "light" ? "dark" : "light"));
  };

  useEffect(() => {
    document.body.setAttribute("data-theme", theme);
  }, [theme]);

  return (
    <header className={styles.header}>
      <div className="container">
        <div className={styles.wrapper}>
          <h1 className={styles.title}>TODO</h1>
          <div
            onKeyPress={(e) => {
              if (e.key === "Enter") {
                toggleTheme();
              }
            }}
            className={`${styles.theme} ${
              theme === "light" ? styles.moon : styles.sun
            }`}
            onClick={toggleTheme}
            tabIndex={0}
          ></div>
        </div>
      </div>
    </header>
  );
};
