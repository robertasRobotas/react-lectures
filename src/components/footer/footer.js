import React from "react";
import styles from "./footer.module.css";

const footer = () => {
  return (
    <div
      style={{
        backgroundColor: "green",
        padding: "40px",
        display: "flex",
        justifyContent: "center",
      }}
    >
      <div>©CodeAcademy</div>
    </div>
  );
};

export default footer;
