import "./styles.scss";
import { useNavigate } from "react-router-dom";
import { useGetter } from "store";

import Card from "components/card";
import Header from "components/header";
import Input from "components/input";
import Title from "components/title";

const Pokedex = () => {
  const { user, pokedex } = useGetter();
  const navigate = useNavigate();

  const handleClick = () => navigate("/profile");

  return (
    <section className="main">
      <Header title="Pokédex">
        <p onClick={handleClick}>{user?.email}</p>
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

export default Pokedex;
