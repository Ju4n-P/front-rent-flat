import React from "react";
import { useCallback } from "react";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export const useFetch = (
  endPoint,
  { defaultState = null, defaultLoading = false } = {}
  // si objet vide, remettra dedans defaultState, defaultLoading
) => {
  const [isLoading, setIsLoading] = useState(defaultLoading);
  const [result, setResult] = useState(defaultState);
  const [error, setError] = useState(null);

  const doFetch = useCallback(() => {
    return fetch(`${process.env.REACT_APP_API_URL}${endPoint}`, {
      method: "get",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((response) => {
        setResult(response);
        console.log("[SUCCESS] useFetch:", response);
      })
      .catch((err) => {
        setError(err);
        console.log("[ERROR] useFetch: ", err);
      })
      .finally(() => setIsLoading(false));
  }, [endPoint]);

  return [doFetch, { isLoading, result, error }];
};

export default function AdPage() {
  const urlParams = useParams();
  const adId = urlParams.id;

  const [fetchAd, { result: ad, isLoading, error }] = useFetch(
    `articles/${adId}`,
    { defaultLoading: true }
  );

  useEffect(() => {
    fetchAd();
  }, []);

  if (isLoading) {
    return <div>Chargement...</div>;
  }

  if (error) {
    return (
      <div>
        Une erreur est survenue
        <pre>{error.message}</pre>
      </div>
    );
  }
  return (
    <div className="flex flex-col m-12 p-8">
      <h2>
        <span className="font-bold text-lg">Annonce :</span> {ad.title}
      </h2>
      <p>{ad.content}</p>
      <br />
      <p>{ad.price}</p>
      <p>Envoyez un mail à l'adresse suivante : {ad.userEmail}</p>
    </div>
  );
}
