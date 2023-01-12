import React from "react";
import Link from "../link/link";
import styled from "styled-components";

const LinksWrapper = styled.ul`
  display: flex;
  list-style-type: none;
  gap: 25px;
`;

const menu = () => {
  return (
    <LinksWrapper>
      <Link path="about" text="About" />
      <Link path="company" text="Company" />
      <Link path="portfolio" text="Portfolio" />
      <Link path="sayHello" text="Say Hello" />
    </LinksWrapper>
  );
};

export default menu;
