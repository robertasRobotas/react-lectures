import React from "react";
import "./navbar.css";
import Logo from "../atoms/logo/Logo";
import Menu from "../menu/menu";

const navbar = () => {
  return (
    <header className="header">
      <Logo />
      <Menu />
    </header>
  );
};

export default navbar;
