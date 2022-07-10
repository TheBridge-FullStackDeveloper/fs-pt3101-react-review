import "./styles.scss";
import { useNavigate, useParams } from "react-router-dom";
import pokedex from "seeds/pokemons.json";
import colors from "utils/colors";
import { capitalize, startWithZeroes } from "utils/commons";

import Header from "components/header";
import Type from "components/type";

const Pokemon = () => {
  const { pokemon } = useParams();
  const navigate = useNavigate();

  const { id, name, sprites, types } = pokedex.find(
    ({ id, name }) => pokemon === id || pokemon === name
  );

  const { front_default: artwork } = sprites.other["official-artwork"];

  const backgroundColor = colors[types[0].type.name].light;

  const handleClick = () => navigate("/");

  return (
    <section className="pokemon" style={{ backgroundColor }}>
      <Header title="Details">
        <p onClick={handleClick}>pokédex</p>
      </Header>

      <section className="artwork">
        <img src={artwork} alt="artwork" />
      </section>

      <section className="details">
        <p className="details__name">{capitalize(name)}</p>
        <section className="details__list">
          {types.map(({ type }, index) => (
            <Type key={index} {...type} />
          ))}
        </section>
        <p className="details__id">#{startWithZeroes(id)}</p>
      </section>
    </section>
  );
};

export default Pokemon;
