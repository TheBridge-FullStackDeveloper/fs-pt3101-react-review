import "./styles.scss";
import colors from "utils/colors";

const Tag = ({ name }) => {
  const backgroundColor = colors[name].standard;

  return (
    <div className="label" style={{ backgroundColor }}>
      <p className="label__name">{name}</p>
    </div>
  );
};

export default Tag;
