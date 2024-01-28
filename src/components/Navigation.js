import React from "react";
import img from "../pictures/tiger-3887020_1280.jpg";
import { Link } from "react-router-dom";

const Navigation = () => {
  const refreshPage = () => {
    window.location.reload(false);
  };
  const handleLogout = () => {
    localStorage.removeItem("token");
    alert("Logged out & Token removed");
    refreshPage();
  };

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
            <li className={"cursor-pointer"}>Create</li>
          </Link>
        </ul>
        <div className="profil-container flex w-full justify-end me-20">
          {localStorage.getItem("token") ? (
            <>
              <div className="flex items-center">
                <Link to="/update">
                  <button className="me-10">Update</button>
                </Link>
                <Link to="/delete">
                  <button className="me-10">Delete</button>
                </Link>
                <button onClick={handleLogout}>Logout</button>
              </div>
              <img className="w-10" src={img} alt="profile_picture" />
            </>
          ) : (
            <Link to="/login">
              <button className="me-10">Sing in</button>
            </Link>
          )}
        </div>
      </div>
    </>
  );
};

export default Navigation;
