import React from "react";
import { Link } from "react-router-dom";

const link = ({ path, text }) => {
  return (
    <li>
      <Link to={`/${path}`}>{text}</Link>
    </li>
  );
};

export default link;
