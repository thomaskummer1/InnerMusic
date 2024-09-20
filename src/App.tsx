import React from "react";
import { HashRouter, Route, Routes, Navigate } from "react-router-dom";
import SignIn from "./LoginPages/SignIn";
import DefaultHomepage from "./Homepage/DefaultHomepage";
import NavBar from "./Navbar/Navbar";
import SignUp from "./LoginPages/SignUp";
import Profile from "./Profile";
function App() {
  return (
    <HashRouter>
      <div>
        <NavBar />
        <Routes>
          <Route path="/" element={<DefaultHomepage />} />
          <Route path="/SignIn/*" element={<SignIn />} />
          <Route path="/SignUp/*" element={<SignUp />} />
          <Route path="/Profile" element={<Profile />} />
        </Routes>
      </div>
    </HashRouter>
  );
}

export default App;
