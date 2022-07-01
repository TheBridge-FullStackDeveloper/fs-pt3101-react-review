import "./styles.scss";
import { useNavigate } from "react-router-dom";
import colors from "utils/colors";
import { capitalize, startWithZeroes } from "utils/commons";

import Tag from "components/tag";

const Card = ({ id, name, sprites, types }) => {
  const navigate = useNavigate();
  const { front_default: artwork } = sprites.other["official-artwork"];
  const backgroundColor = colors[types[0].type.name].light;

  const handleClick = () => navigate(`/${name}`);

  return (
    <section className="card" style={{ backgroundColor }} onClick={handleClick}>
      <section className="card__info">
        <p className="card__id">#{startWithZeroes(id)}</p>
        <p className="card__name">{capitalize(name)}</p>
        <section className="card__labels">
          {types.map(({ type }, index) => (
            <Tag key={index} {...type} />
          ))}
        </section>
      </section>

      <section className="card__sprite">
        <img src={artwork} alt="artwork" />
      </section>
    </section>
  );
};

export default Card;
