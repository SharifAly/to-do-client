import React from "react";
import axios from "axios";
import { useState } from "react";
import Swal from "sweetalert2";

const Register = () => {
  const [first_name, setFirst_name] = useState("");
  const [last_name, setLast_name] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();

    const url = "http://localhost:5000/register";
    const data = {
      f_name: first_name,
      l_name: last_name,
      email: email,
      password: password,
    };

    axios
      .post(url, data)
      .then((res) => {
        console.log(res);
        setFirst_name("");
        setLast_name("");
        setEmail("");
        setPassword("");
        Swal.fire("User Registered Successfully");
      })
      .catch((error) => {
        console.error("There was an error!", error);
      });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="f_name"
        placeholder="First Name"
        value={first_name}
        onChange={(e) => setFirst_name(e.target.value)}
      />
      <input
        type="text"
        name="l_name"
        placeholder="Last Name"
        value={last_name}
        onChange={(e) => setLast_name(e.target.value)}
      />
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
  );
};

export default Register;
