import React from "react";
import "./sidebar.css";

const sidebar = ({ category }) => {
  return (
    <div className="sidebar_container">
      <h4>Категории:</h4>
      <div className="sidebar_container-categories">{category}</div>
    </div>
  );
};

export default sidebar;
