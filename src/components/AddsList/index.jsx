import React from "react";
import { useState, useEffect } from "react";
import AOS from "aos";
import RedirectButton from "../RedirectButton/";

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

  useEffect(() => {
    AOS.init({
      delay: 200,
      duration: 1200,
    });
  });

  return (
    <ul className="flex flex-col w-[80vw] my-8">
      {status === "Loading" && <div>En cours de chargement !</div>}
      {status === "Error" && <div>Nous n'avons pas trouvé d'annonces...</div>}
      {status === "Success" &&
        list.map((add) => (
          <li
            key={add.id}
            className="flex flex-col items-end my-2 p-4 border border-slate-200 rounded-lg hover:shadow-md hover:bg-white relative"
            data-aos="fade-up"
            data-aos-anchor-placement="top-bottom"
          >
            <div className="flex p-4  w-full">
              <div className="w-full">
                <a
                  className="font-bold text-[#1976D2]"
                  href={`/articles/${add.id}`}
                >
                  {add.title}
                </a>
                <p>{add.content.substring(0, 100)}...</p>
                <small className="text-gray-500">
                  Date de publication : {add.updated_at}
                </small>
              </div>

              <div className="w-20 flex justify-center">
                <p className="text-xl">{add.price} €</p>
              </div>
            </div>
            <RedirectButton urlToGo={`/articles/${add.id}`}>
              Voir les détails
            </RedirectButton>
          </li>
        ))}
    </ul>
  );
}

export default AddsList;
