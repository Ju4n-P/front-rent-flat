import React from "react";
import { useState, useEffect } from "react";

function AddsList(props) {
  const [status, setStatus] = useState("");
  const [list, setList] = useState([]);

  useEffect(() => {
    setStatus("Loading");
    fetch(props.urlToFetch)
      .then((response) => response.json())
      .then(setList)
      .then(() => setStatus("Success"))
      .catch(() => setStatus("Error"));
  }, []);

  return (
    <ul>
      {status === "Loading" && <div>En cours de chargement !</div>}
      {status === "Error" && <div>Nous n'avons pas trouvé d'annonces...</div>}
      {status === "Success" &&
        list.map((add) => (
          <li key={add.id}>
            <h5>{add.title}</h5>
            <p>{add.content.substring(0, 30)}...</p>
            <a href={`/articles/${add.id}`}>Voir les détails</a>
          </li>
        ))}
    </ul>
  );
}

export default AddsList;
