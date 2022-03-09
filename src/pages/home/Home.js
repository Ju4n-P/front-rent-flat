import React from "react";
import AddsList from "../../compnents/Main/AddsList/";
import "./home.scss";
// import { useState } from 'react';
// import Toggle from "../../compnents/toggle/Toggle";

const Home = () => {
  return (
    <>
      <div className="Home flex flex-col items-center p-16">
        <div className="flex flex-col items-center w-[70%] bg-white">
          <h1 className="text-3xl text-yellow-500 text-center">
            <span className="font-bold text-4xl">Bienvenue sur ImmoFind,</span>{" "}
            <br />
            le meilleur outil de prise de contact de particulier à particulier
            pour louer votre appartement !{" "}
          </h1>
        </div>

        {/* <Toggle /> */}
      </div>

      <div className="p-4">
        <h3 className="text-lg">Les dernières annonces en ligne :</h3>
        <AddsList />
      </div>
    </>
  );
};

export default Home;
