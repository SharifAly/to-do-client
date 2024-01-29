import "./App.css";
import Home from "./pages/Home";
import Navigation from "./components/Navigation";
import Footer from "./components/Footer";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Add from "./components/Add";
import ToDoList from "./components/ToDoList";
import Update from "./pages/Update";
import Delete from "./components/Delete";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Navigation />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/add" element={<Add />} />
        <Route path="/list" element={<ToDoList />} />
        <Route path="/update" element={<Update />} />
        <Route path="/delete" element={<Delete />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
