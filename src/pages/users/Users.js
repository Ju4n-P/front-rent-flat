import React from "react";
import { Link } from "react-router-dom";
import "./users.scss";

const Users = () => {
  const users = [
    {
      id: 22,
      name: "Jorge",
    },
    {
      id: 39,
      name: "Kaled",
    },
  ];

  return (
    <div className="Users">
      <ul>
      {users.map((user) => {
        return(
        <li><Link to={"/users/" + user.id}>{user.id}</Link></li>
        )
      })}
      </ul>
      <p>Users pages</p>
    </div>
  );
};

export default Users;
