import React from "react";

const MenuItem = ({ name, description, price }) => {
  return (
    <div className="menu-item">
      <h3>{name} - {price}</h3>
      <p>{description}</p>
    </div>
  );
};

export default MenuItem;
