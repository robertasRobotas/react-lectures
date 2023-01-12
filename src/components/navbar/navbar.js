import React from "react";
import styles from "./navbar.module.css";
import Logo from "../atoms/logo/Logo";
import Menu from "../menu/menu";

const navbar = () => {
  return (
    <header className={styles.header}>
      <Logo />
      <Menu />
    </header>
  );
};

export default navbar;
