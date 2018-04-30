import React from "react";

export default ({ access, text, setAccess, createBoardAccess }) => (
  <li className="access-lists p-2" onClick={setAccess}>
    <span className='d-block access-list-header'>
      {access == 'Public' && <i className="fas fa-globe pr-1"></i>}
      {access == 'Private' && <i className="fas fa-lock pr-1"></i>}
      {access} {createBoardAccess == access && <i className="fas fa-check pl-1"></i>}</span>
    <small className='d-inline-block'>{text}</small>
  </li>
);
