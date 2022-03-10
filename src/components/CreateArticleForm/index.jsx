import React, { useCallback, useState } from "react";
import Cookies from "js-cookie";

// const token = Cookies.get("token");

export const usePost = (
  endPoint,
  { defaultState = null, defaultLoading = false } = {}
  // si objet vide, remettra dedans defaultState, defaultLoading
) => {
  const [isLoading, setIsLoading] = useState(defaultLoading);
  const [result, setResult] = useState(defaultState);
  const [error, setError] = useState(null);

  const doFetch = useCallback(
    (body) => {
      return fetch(`${process.env.REACT_APP_API_URL}${endPoint}`, {
        method: "post",
        headers: {
          "Content-Type": "application/json",
          Authorization: `${Cookies.get("token")}`,
        },
        body: JSON.stringify({ article: body }),
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
    },
    [endPoint]
  );

  return [doFetch, { isLoading, result, error }];
};

export const CreateArticleForm = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [price, setPrice] = useState(10);
  const [createAd, { isLoading, result, error }] = usePost("articles");

  const handleSubmit = useCallback(
    (e) => {
      e.stopPropagation();
      e.preventDefault();

      createAd({
        title,
        content,
        price,
      });
    },
    [title, content, price]
  );

  return (
    <div>
      {error && (
        <div>
          Une erreur est survenue :
          <br />
          <pre>{error.message}</pre>
        </div>
      )}
      <form onSubmit={handleSubmit}>
        <label>
          <input
            placeholder="Titre"
            type="text"
            name="title"
            onChange={(e) => setTitle(e.target.value)}
            disabled={isLoading}
          />
        </label>
        <label>
          <input
            placeholder="Description"
            type="text"
            name="content"
            onChange={(e) => setContent(e.target.value)}
            disabled={isLoading}
          />
        </label>
        <label>
          <input
            type="number"
            step="0.01"
            min="0"
            name="price"
            onChange={(e) => setPrice(e.target.value)}
            disabled={isLoading}
          />
        </label>
        <button type="submit" disabled={isLoading}>
          Créer
        </button>
      </form>
    </div>
  );
};
