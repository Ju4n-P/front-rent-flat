import React from "react";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export default function AddPage() {
  const [status, setStatus] = useState(undefined);
  const [add, setAdd] = useState([]);

  const url_id = useParams();
  const add_id = url_id["id"];
  // console.log(add_id);

  // useEffect(() => {
  if (status === undefined) {
    setStatus("Loading");
    fetch(`https://api-rails-immocoin.herokuapp.com/articles/${add_id}`, {
      method: "get",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json())
      .then(setAdd)
      .then((response) => console.log(response))
      .then(() => setStatus("Success"))
      .catch(() => setStatus("Error"));
    console.log("status", status);
    console.log("add", add);
  }

  // }, []);

  // fetch(`https://api-rails-immocoin.herokuapp.com/articles/${add_id}`)
  //   .then((response) => response.json())
  //   .then((res) => setAdd(res))
  //   .then(console.log(add))
  //   .then(() => setStatus("Success"))
  //   .catch(() => setStatus("Error"));

  return (
    // <div className="flex flex-col m-12 p-8">
    //   <h2>
    //     <span className="font-bold text-lg">Annonce :</span> {add.title}
    //   </h2>
    //   <p>{add.content}</p>
    //   <br />
    //   <p>{add.price}</p>
    //   <p>Envoyez un mail à l'adresse suivante : {add.user_id.email}</p>
    // </div>
    <div>Blabla</div>
  );
}
