import React from "react";
import { HashRouter, Route, Routes, Navigate } from "react-router-dom";
import SignIn from "./Components/LoginPages/SignIn";
import DefaultHomepage from "./Components/Homepage/DefaultHomepage";
import NavBar from "./Components/Navbar/Navbar";
import SignUp from "./Components/LoginPages/SignUp";
import Profile from "./Components/Profile";
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
