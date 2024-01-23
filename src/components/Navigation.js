import React from "react";
import img from "../pictures/tiger-3887020_1280.jpg";
import { Link } from "react-router-dom";

const Navigation = () => {
  return (
    <>
      <div className="list-container flex w-screen justify-between items-center py-2">
        <div className="logo-container flex ms-10 items-center">
          <img className="w-10 me-6" src={img} alt="" />
          <h3 className="flex flex-row w-32 font-bold">To Do List</h3>
        </div>
        <ul className="flex w-full justify-evenly">
          <Link to="/">
            <li className="cursor-pointer">To-Do's</li>
          </Link>
          <Link to="/add">
            <li className="cursor-pointer">Login</li>
          </Link>
          {/* <Link>
            <li className="cursor-pointer">Register</li>
          </Link> */}
        </ul>
        <div className="profil-container flex w-full justify-end me-20">
          <Link className="flex items-center" to="/login">
            <button className="me-10">Sing in</button>
          </Link>
          <img className="w-10" src={img} alt="profile_picture" />
        </div>
      </div>
    </>
  );
};

export default Navigation;
