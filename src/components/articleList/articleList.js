import React from "react";
import Article from "../article/article";
import styled from "styled-components";

const ArticleWrapper = styled.div`
  margin-top: 30px;
  margin-bottom: 30px;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 20px;
`;

const articleList = ({ articles }) => {
  return (
    <ArticleWrapper>
      {articles.map((article) => {
        return <Article article={article} />;
      })}
    </ArticleWrapper>
  );
};

export default articleList;
