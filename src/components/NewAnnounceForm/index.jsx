import React from "react";
import Cookies from "js-cookie";
import { useState } from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

const NewAnnounceForm = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [price, setPrice] = useState(0);

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch("https://api-rails-immocoin.herokuapp.com/articles", {
      method: "post",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        user: {
          title: title,
          content: content,
          price: price,
        },
      }),
    })
      .then((res) => {
        if (res.ok) {
          Cookies.get("token", res.headers.get("Authorization"));
          window.location.href = "/";
          return res.json();
        } else {
          throw new Error(res);
        }
      })
      .then((json) => console.log(json.user.id))
      .catch((err) => console.error(err));
  };

  return (
    <div>
      <form action="post" className="Form" onSubmit={handleSubmit}>
        <TextField
          label="Email"
          variant="filled"
          type="email"
          required
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <TextField
          label="Password"
          variant="filled"
          type="password"
          required
          value={content}
          onChange={(e) => setContent(e.target.value)}
        />
        <TextField
          label="Price"
          variant="filled"
          type="text"
          required
          value={price}
          onChange={(e) => setPrice(e.target.value)}
        />
        <div className="Button">
          <Button type="submit" variant="contained" color="primary">
            Poster
          </Button>
        </div>
      </form>
    </div>
  );
};

export default NewAnnounceForm;
