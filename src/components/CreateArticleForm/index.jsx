import React, { useCallback, useState } from "react";
import Cookies from "js-cookie";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

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
      return fetch(`https://api-rails-immocoin.herokuapp.com/articles`, {
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
      <form action="post" className="Form" onSubmit={handleSubmit}>
        <TextField
          label="Titre"
          variant="filled"
          type="text"
          required
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <TextField
          label="Description"
          variant="filled"
          type="text"
          required
          value={content}
          onChange={(e) => setContent(e.target.value)}
          disabled={isLoading}
        />
        <TextField
          label="Prix"
          variant="filled"
          type="number"
          required
          value={price}
          onChange={(e) => setPrice(e.target.value)}
          disabled={isLoading}
        />
        <div className="Button">
          <Button type="submit" disabled={isLoading}>
            Créer
          </Button>
        </div>
      </form>
    </div>
  );
};
