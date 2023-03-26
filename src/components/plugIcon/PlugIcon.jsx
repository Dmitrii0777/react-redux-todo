// REACT
import React from "react";

// COMPONENT
import { ReactComponent as EmailIcon } from "@assets/images/Email.svg";

// STYLES
import styles from "./plugIcon.module.css";

export const PlugIcon = () => {
  return (
    <div className={styles.content}>
      <EmailIcon />
      <h1 className={styles.title}>There is nothing here</h1>
      <p className={styles.description}>
        Create an todo by clicking the New create todo and get started
      </p>
    </div>
  );
};
