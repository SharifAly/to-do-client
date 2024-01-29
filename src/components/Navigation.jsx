import React from "react";
import img from "../pictures/tiger-3887020_1280.jpg";
import logo from "../pictures/to-do-list.png";
import { Link } from "react-router-dom";

const Navigation = () => {
  const refreshPage = () => {
    window.location.reload(false);
  };
  const handleLogout = () => {
    localStorage.removeItem("token");
    refreshPage();
  };

  return (
    <>
      <div className="bg-slate-50 shadow-md list-container flex w-screen justify-between items-center py-2">
        <div className="logo-container flex ms-10 items-center">
          <img className="w-10 me-6" src={logo} alt="" />
          <h3 className="flex flex-row w-40 font-bold">React To Do List</h3>
        </div>
        <ul className="flex w-full justify-evenly">
          <Link to="/">
            <li className="cursor-pointer items-center">Home</li>
          </Link>
          <Link to="/add">
            <li
              className={`cursor-pointer ${
                localStorage.getItem("token") ? "" : "hide"
              }`}
            >
              Create
            </li>
          </Link>
          <Link to="/list">
            <li
              className={`cursor-pointer ${
                localStorage.getItem("token") ? "" : "hide"
              }`}
            >
              To Do's
            </li>
          </Link>
        </ul>
        <div className="profil-container flex w-full justify-end me-20">
          {localStorage.getItem("token") ? (
            <>
              <div className="flex items-center">
                <button onClick={handleLogout}>Logout</button>
              </div>
              <img className="w-10" src={img} alt="profile_picture" />
            </>
          ) : (
            <Link to="/login">
              <button className="me-10 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                Sing in
              </button>
            </Link>
          )}
        </div>
      </div>
    </>
  );
};

export default Navigation;
