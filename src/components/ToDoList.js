import React, { useState, useEffect } from "react";
import axios from "axios";

const ToDoList = () => {
  // const [todos, setTodos] = useState([]);
  // useEffect(() => {
  //   const url = "http://localhost:5000/list";
  //   axios
  //     .get(url)
  //     .then((res) => {
  //       console.log(res);
  //       console.log(res.data);
  //     })
  //     .catch((error) => {
  //       console.error("There was an error!", error);
  //     });
  // }, []);
  return (
    <div>
      {/* {todos.map((item) => (
        <div key={item.id}>{item.email}</div>
      ))} */}
    </div>
  );
};

export default ToDoList;
