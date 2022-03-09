import React, { useState } from "react";

const Signup = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const data = {
    email,
    password,
  };

  const registerFetchRequest = () => {
    fetch("https://api-rails-immocoin.herokuapp.com/users", {
      method: "post",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((response) => response.json())
      .then((response) => {
        if (response.error) {
        } else {
          console.log(response.jwt);
          window.location.href = "/";
        }
        console.log("sign up successfully");
      });
  };

  return (
    <div>
      <form action="post" className="Form" onSubmit={handleSubmit}>
        <input
          label="Email"
          variant="filled"
          type="email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          label="Password"
          variant="filled"
          type="password"
          required
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <div className="Button">
          <button
            type="submit"
            variant="contained"
            color="primary"
            onClick={() => registerFetchRequest()}
          >
            Register
          </button>
        </div>
      </form>
    </div>
  );
};

export default Signup;
