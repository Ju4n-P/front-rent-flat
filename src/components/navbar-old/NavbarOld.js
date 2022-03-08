import React from "react";
import {Link} from "react-router-dom";

const NavbarOld = (props) => {
  return (
    <div>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/users"> Users</Link></li>
        <li><Link to="/post"> Post</Link></li>
      </ul>
      {props.children}
    </div>
  );
};

export default NavbarOld;
