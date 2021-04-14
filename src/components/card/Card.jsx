import React from "react";
import { Link } from "react-router-dom";

const Card = ({ title, content, route, ...props }) => (
  <div className="card" {...props}>
    <div className="title">{title}</div>
    <div className="content">{content}</div>
    <Link to={route} className="arrow"></Link>
  </div>
);

export default Card;
