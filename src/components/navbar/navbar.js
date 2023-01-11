import React from "react";
import styles from "./navbar.module.css";
import { Link } from "react-router-dom";
import Logo from "../atoms/logo/Logo";

const navbar = () => {
  return (
    <header className={styles.header}>
      <Logo />
      <ul className={styles.menuList}>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/portfolio">Portfolio</Link>
        </li>
        <li>
          <Link to="/contacts">Contacts</Link>
        </li>
      </ul>
    </header>
  );
};

export default navbar;
