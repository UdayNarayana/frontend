import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import Login from "./components/Login";
import Navbar from "./components/Navbar";
import Register from "./components/Register";
import Home from "./components/Home";
import Cart from "./components/Cart";

function App() {
  return (
    <BrowserRouter>
      <Navbar/>
        <div>
          <Routes>
            <Route index path="/" element={<Login/>}/>
            <Route path="/register" element={<Register/>}/>
            <Route path="/home" element={<Home/>}/>
            <Route path="/cart" element={<Cart/>}/>
          </Routes>
        </div>
    </BrowserRouter>
  );
}

export default App;
