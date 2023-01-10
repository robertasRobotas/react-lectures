import React from "react";
import styles from "./article.module.css";
import { useNavigate } from "react-router-dom";

const Article = ({ article }) => {
  const navigate = useNavigate();

  const onClickComponent = () => {
    navigate(`/currency/${article.id}`);
  };

  return (
    <div onClick={() => onClickComponent()} className={styles.main}>
      <img className={styles.image} alt="news-img" src={article.image} />
      <h1 className={styles.title}>{article.name}</h1>
    </div>
  );
};

export default Article;
