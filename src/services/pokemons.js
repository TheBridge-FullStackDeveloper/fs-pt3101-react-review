import { catcher } from "./utils";

const LENGTH = 20;
const FROM = 100;

const getSample = (client) => async () => {
  const list = Array.from({ length: LENGTH }, (_, i) => i + FROM);
  return await Promise.all(
    list.map((id) => catcher(client.get)(`/pokemon/${id}`))
  );
};

const pokemons = (client) => ({
  getSample: getSample(client),
});

export default pokemons;
