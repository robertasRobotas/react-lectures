import React from "react";
import styles from "./title.module.css";

const mainBody = ({ articleTitle }) => {
  return <div className={styles.title}>{articleTitle}</div>;
};

export default mainBody;
