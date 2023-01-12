import React from "react";
import { Link } from "react-router-dom";
import styles from "./link.module.css";

const link = ({ path, text }) => {
  return (
    <li className={styles.linkWrapper}>
      <Link to={`/${path}`}>{text}</Link>
    </li>
  );
};

export default link;
