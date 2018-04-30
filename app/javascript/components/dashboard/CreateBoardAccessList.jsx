import React from "react";

export default ({ access, text, setAccess, createBoardAccess }) => (
  <li className="access-lists p-2" onClick={setAccess}>
    <span className='d-block'>{access} {createBoardAccess == access && <i className="fas fa-check"></i>}</span>
    <small className='d-inline-block'>{text}</small>
  </li>
);
