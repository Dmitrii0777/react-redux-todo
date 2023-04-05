// REACT
import { useEffect } from "react";

// REDUX
import { useSelector, useDispatch } from "react-redux";
import { setTheme } from "@store/theme/theme-actions";

// LIBRARY
import cn from "classnames";

// MODULES
import { changeCssVariables } from "@services/changeCssVariables";
import { LIGHT, DARK } from "@constants/theme";

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
    changeCssVariables(theme);
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
          className={cn(styles.theme, {
            [styles.moon]: theme === LIGHT,
            [styles.sun]: theme !== LIGHT,
          })}
          onClick={toggleTheme}
          onKeyPress={handleThemeKeyPress}
        ></div>
      </div>
    </header>
  );
};
