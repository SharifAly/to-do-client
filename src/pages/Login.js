import React from "react";
import { useState } from "react";
import axios from "axios";
// import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const url = "http://localhost:5000/login";
    const data = {
      email: email,
      password: password,
    };
    axios
      .post(url, data)
      .then((res) => {
        console.log(res);

        localStorage.setItem("token", res.data.token);
        navigate("/");
        window.location.reload();
      })
      .catch((error) => {
        console.error("There was an error!", error);
      });
  };

  return (
    <>
      <form
        className={`${localStorage.getItem("token") ? "hide" : ""}`}
        onSubmit={handleSubmit}
      >
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit">Submit</button>
      </form>
    </>
  );
};

export default Login;
