import axios from "axios";
import pokemons from "./pokemons";
import auth from "./auth";
import user from "./user";

const pokeapi = axios.create({
  baseURL: "https://pokeapi.co/api/v2",
});

const instance = axios.create({
  baseURL: "http://localhost:3002",
  withCredentials: true,
});

const services = {
  pokemons: pokemons(pokeapi),
  auth: auth(instance),
  user: user(instance),
};

export default services;
