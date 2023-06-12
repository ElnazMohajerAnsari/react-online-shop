import React from "react";
import "./Card.css";

const Card = (props: any): JSX.Element => {
  return <div className="card">{props.children}</div>;
};

export default Card;
