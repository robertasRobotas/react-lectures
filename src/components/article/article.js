import React from "react";
import styles from "./article.module.css";

const article = ({ article }) => {
  console.log("article", article);

  return (
    <div className={styles.main}>
      <img className={styles.image} alt="news-img" src={article.imageSrc} />
      <h1 className={styles.title}>{article.title}</h1>
    </div>
  );
};

export default article;
