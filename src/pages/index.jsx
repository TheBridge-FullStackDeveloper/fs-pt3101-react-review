import "./styles.scss";
import pokedex from "seeds/pokemons.json";
import { useNavigate } from "react-router-dom";

import Card from "components/card";
import Input from "components/input";
import Header from "components/header";
import Title from "components/title";

const Main = () => {
  const navigate = useNavigate();

  const handleClick = () => navigate("/profile");

  return (
    <section className="main">
      <Header title="Pokédex">
        <p onClick={handleClick}>test@test.com</p>
      </Header>

      <Title>
        Search for Pokémon by name or using the
        <br />
        National Pokédex number
      </Title>

      <Input placeholder="Search" position="left" small />

      <section className="list">
        {pokedex.map((pokemon, index) => (
          <Card key={index} {...pokemon} />
        ))}
      </section>
    </section>
  );
};

export default Main;
