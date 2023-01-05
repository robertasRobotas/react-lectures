import React from "react";
import styles from "./mainBody.module.css";
import Article from "../article/article";

const mainBody = ({ todayDate, articleTitle, articles, setTitle }) => {
  console.log("articles", articles);

  return (
    <div className={styles.mainBody}>
      <div
        onClick={() => {
          setTitle("Reactas valdo!");
        }}
        className={styles.title}
      >
        {articleTitle}
      </div>
      <div className={styles.articlesWrapper}>
        {articles.map((article) => {
          return <Article article={article} />;
        })}
      </div>
    </div>
  );
};

export default mainBody;
