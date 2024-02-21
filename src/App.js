// App.js
import React from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import About from "./RouteComponents/About";
import Contact from "./RouteComponents/Contact";
import Home from "./RouteComponents/Home";
import Login from "./RouteComponents/Login";
import Navbar from "./RouteComponents/Navbar";
import NotFound from "./RouteComponents/NotFound";

function App() {
  return (
    <Router>
      <div>
        <Navbar />

        <Routes>
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/home" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
