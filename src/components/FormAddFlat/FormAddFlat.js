import React, { useState } from "react";
import { useDispatch } from "react-redux";
import "./FormAddFlat.scss";

const FormAddFlat = () => {
  const [article, setArticle] = useState({
    ville: "",
    description: "",
    prix: "",
  });

  const dispatch = useDispatch();

  const handleForm = (e) => {
    e.preventDefault();
  };

  const handleInputs = (e) => {
      console.log("hello change")
  };

  return (
    <div>
      <h1 className="title-form"> Ajouter un appartement </h1>

      <form 
      onSubmit={handleForm}
      className="container-form">
        <label htmlFor="title">Ville</label>
        <input
        onChange={handleInputs} 
        type="text" 
        id="ville" 
        placeholder="Entrez le nom de la ville" 
        />

        <label htmlFor="title">Description</label>
        <input
          onChange={handleInputs} 
          type="text"
          id="description"
          placeholder="Entrez une description"
        />

        <label htmlFor="title">Prix</label>
        <input 
        onChange={handleInputs} 
        type="text" 
        id="prix" 
        placeholder="Entrez le prix de l'appart" 
        />

        <button>Rajoutez un appartement</button>
      </form>
    </div>
  );
};

export default FormAddFlat;
