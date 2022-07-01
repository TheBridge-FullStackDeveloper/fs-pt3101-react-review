import "./styles.scss";
import colors from "utils/colors";

const Type = ({ name }) => {
  const backgroundColor = colors[name].standard;

  return (
    <section className="type">
      <div className="type__circle" style={{ backgroundColor }} />
      <p className="type__text">{name}</p>
    </section>
  );
};

export default Type;
