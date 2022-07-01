import { createContext, useContext } from "react";

const Context = createContext(null);

export const useGetter = () => {
  const { user, setUser, pokedex, setPokedex } = useContext(Context);
  return { user, setUser, pokedex, setPokedex };
};

export default Context;
