import { useEffect, useState } from "react";
import { useGetter } from "store";
import services from "services";

export const usePokedex = () => {
  const [pokedex, setPokedex] = useState([]);

  const getPokedex = async () => {
    const result = await services.pokemons.getSample();
    result && setPokedex(result);
  };

  return [pokedex, getPokedex];
};

export const useUser = () => {
  const [user, setUser] = useState(null);

  const getUser = async () => {
    const result = await services.user.getInfo();
    result.success && setUser(result.data);
  };

  return [user, getUser];
};

export const useRegister = ({ onSuccess }) => {
  const register = async (data) => {
    const result = await services.auth.register(data);
    result.success && onSuccess();
  };

  return register;
};

export const useLogin = ({ onSuccess }) => {
  const { user, setUser } = useGetter();

  const login = async (data) => {
    const result = await services.auth.login(data);
    result.success && setUser();
  };

  useEffect(() => {
    user && onSuccess();
  }, [user]);

  return login;
};
