import React from "react";
import styles from "./articleList.module.css";
import Article from "../article/article";

const articleList = ({ articles }) => {
  return (
    <div className={styles.articlesWrapper}>
      {articles.map((article) => {
        return <Article article={article} />;
      })}
    </div>
  );
};

export default articleList;
