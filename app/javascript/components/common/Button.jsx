import React from "react"
import PropTypes from "prop-types"

export default ({ id, onClick, className, text, icon, disabled, type }) => {
  return (
    <button
      id={id}
      onClick={onClick}
      className={className}
      type={type}
      disabled={disabled}>
      {text}
    </button>
  );
};

