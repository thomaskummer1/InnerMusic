import React from "react";
import { HashRouter, Route, Routes, Navigate } from "react-router-dom";
import SignIn from "./Components/LoginPages/SignIn";
import DefaultHomepage from "./Components/Homepage/DefaultHomepage";
import NavBar from "./Components/Navbar/Navbar";
import SignUp from "./Components/LoginPages/SignUp";
import Profile from "./Components/Profile";
import { Provider } from "react-redux";
import store from "./store";
import ProtectedRoute from "./Components/Profile/ProtectedRoute";
import Search from "./Components/Homepage/Search";
function App() {
  return (
    <HashRouter>
      <Provider store={store}>
        <div>
          <NavBar />
          <Routes>
            <Route path="/" element={<DefaultHomepage />} />
            <Route path="/Search" element={<Navigate to="/" />} />
            <Route path="/Search/:sterm" element={<Search />} />
            <Route path="/SignIn" element={<SignIn />} />
            <Route path="/SignUp" element={<SignUp />} />
            <Route
              path="/Profile/*"
              element={
                <ProtectedRoute>
                  <Profile />
                </ProtectedRoute>
              }
            />
          </Routes>
        </div>
      </Provider>
    </HashRouter>
  );
}

export default App;
