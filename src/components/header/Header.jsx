// REACT
import React, { useEffect } from "react";

// REDUX
import { useSelector, useDispatch } from "react-redux";

// STORE
import { setTheme } from "@store/theme/theme-actions";

// STYLES
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

  const handleThemeKeyPress = (event) => {
    if (event.key === "Enter") {
      toggleTheme();
    }
  };

  return (
    <header className={styles.header}>
      <div className={styles.wrapper}>
        <h1 className={styles.title}>TODO</h1>
        <div
          onKeyPress={handleThemeKeyPress}
          className={`${styles.theme} ${
            theme === "light" ? styles.moon : styles.sun
          }`}
          onClick={toggleTheme}
          tabIndex={0}
        ></div>
      </div>
    </header>
  );
};
