import React from "react";

function Card(props) {
  const {
    card: { src, title },
    handleGameLogic,
  } = props;

  return (
    <div className="card">
      <img
        className="image"
        src={src}
        alt={title}
        onClick={handleGameLogic.bind(this, title)}
      />
      <h4>{title}</h4>
    </div>
  );
}

export default Card;
