import React from "react";
import { Link } from "react-router-dom";
import "./post.scss";

const Post = () => {
  const components = [
    {
      id: 1,
      name: "Rendu conditionnel",
    },
    {
      id: 2,
      name: "Operateur Ternaire",
    },
  ];

  return (
    <div className="Post">
      <h2>Page annonces</h2>
      <ul>
        {components.map((compo) => {
          return (
            <li>
              <Link to={"/post/" + compo.id}>
                {compo.id} {compo.name}
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Post;
