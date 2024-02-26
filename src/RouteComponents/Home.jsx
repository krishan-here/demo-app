// Home.js
import React from "react";
import { Route, Routes } from "react-router-dom";
import Contact from "./Contact";
import Description from "./Description";
import Salary from "./Salary";

function Home() {
  return (
    <>
      <h2>Home</h2>
      <div className="m-4">
        <ul class="nav nav-tabs">
          <li class="nav-item">
            <a class="nav-link active" aria-current="page" href="/home">
              Work
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="/home/salary">
              Salary
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="/home/description">
              Description
            </a>
          </li>
        </ul>
        <Routes>
          <Route path="/*" element={<Contact />} />
          <Route path="/salary" element={<Salary />} />
          <Route path="/description" element={<Description />} />
        </Routes>
      </div>
    </>
  );
}

export default Home;
