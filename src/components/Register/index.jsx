import React, { useState } from "react";
import Cookies from "js-cookie";
import { userLogin } from "../../redux/stateUser/userAction";
import { useDispatch } from "react-redux";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

const Register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const dispatch = useDispatch();

  const changeConnectedStatus = () => {
    dispatch(userLogin());
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch(`${process.env.REACT_APP_API_URL}users`, {
      method: "post",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        user: {
          email: email,
          password: password,
        },
      }),
    })
      .then((res) => {
        if (res.ok) {
          Cookies.set("token", res.headers.get("Authorization"));
          changeConnectedStatus();
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
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <TextField
          label="Password"
          variant="filled"
          type="password"
          required
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <div className="Button">
          <Button type="submit" variant="contained" color="primary">
            Register
          </Button>
        </div>
      </form>
    </div>
  );
};

export default Register;
