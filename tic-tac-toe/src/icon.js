import React from "react";
import { FiEdit2, FiCircle, FiX } from "react-icons/fi";

function Icon({ name }) {
  switch (name) {
    case "circle":
      return <FiCircle className="icon" />;
    case "cross":
      return <FiX className="icon" />;
    default:
      return <FiEdit2 className="icon" />;
  }
}

export default Icon;
