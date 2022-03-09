import React from "react";
import AddsList from "../../components/AddsList";
import "./home.scss";
// import { useState } from 'react';

// import Toggle from "../../compnents/toggle/Toggle";


const Home = () => {
  return (
    <>
      <div className="hero-section flex flex-col items-center p-16">
        <div className="flex flex-col items-center w-[70%] bg-black/70 p-12">
          <h1 className="text-3xl text-white text-center">
            <span className="font-bold text-4xl">Bienvenue sur ImmoFind,</span>{" "}
            <br />
            le meilleur outil de prise de contact de particulier à particulier
            pour louer votre appartement !{" "}
          </h1>
        </div>

        {/* <Toggle /> */}
      </div>

      <div className="p-12">
        <h3 className="text-lg font-semibold">
          Les dernières annonces en ligne :
        </h3>
        <AddsList urlToFetch="https://api-rails-immocoin.herokuapp.com/articles/" />
      </div>
    </>
  );
};

export default Home;
