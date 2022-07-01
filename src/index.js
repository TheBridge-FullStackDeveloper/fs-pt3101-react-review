import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Context, { useGetter } from "store";
import { usePokedex, useUser } from "hooks";

import Main from "pages";
import Pokedex from "pages/pokedex";
import Pokemon from "pages/_pokemon";
import Login from "pages/auth/login";
import Register from "pages/auth/register";
import Profile from "pages/profile";

const Guard = ({ component: Component }) => {
  const { user } = useGetter();
  return user ? Component : <Navigate to="/login" replace />;
};

const Container = () => {
  const [pokedex, setPokedex] = usePokedex();
  const [user, setUser] = useUser();
  return (
    <Context.Provider value={{ user, setUser, pokedex, setPokedex }}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Guard component={<Main />} />}>
            <Route path="pokedex" element={<Pokedex />} />
            <Route path="profile" element={<Profile />} />
            <Route path=":pokemon" element={<Pokemon />} />
          </Route>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </BrowserRouter>
    </Context.Provider>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Container />
  </React.StrictMode>
);
