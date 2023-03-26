// REACT
import React, { useEffect } from "react";

// REDUX
import { useSelector, useDispatch } from "react-redux";

// STORE
import { setTheme } from "@store/theme/theme-actions";

// CONSTANTS
import { LIGHT, DARK } from "@constants/constants";

// STYLES
import styles from "./header.module.css";

export const Header = () => {
  const dispatch = useDispatch();
  const theme = useSelector((state) => state.theme);

  const toggleTheme = () => {
    dispatch(setTheme(theme === LIGHT ? DARK : LIGHT));
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
          tabIndex={0}
          className={`${styles.theme} ${
            theme === LIGHT ? styles.moon : styles.sun
          }`}
          onClick={toggleTheme}
          onKeyPress={handleThemeKeyPress}
        ></div>
      </div>
    </header>
  );
};
