import "./styles.scss";
import colors from "utils/colors";

const Button = ({ text, handleClick }) => {
  const colorsList = Object.values(colors);
  const backgroundColor =
    colorsList[~~(Math.random() * colorsList.length)].light;

  return (
    <section
      className="button"
      style={{ backgroundColor }}
      onClick={handleClick}
    >
      <p className="button__text">{text}</p>
    </section>
  );
};

export default Button;
