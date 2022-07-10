import "../styles.scss";
import { useNavigate } from "react-router-dom";
import images from "utils/imgLoader";

import Input from "components/input";
import Button from "components/button";

const Login = () => {
  const navigate = useNavigate();

  const handleClick = () => navigate("/register");

  return (
    <section className="login">
      <section className="icon">
        <img src={images.pokeballIcon} alt="pokeball icon" />
      </section>

      <section className="inputs">
        <Input type="text" placeholder="email" />
        <Input type="password" placeholder="password" />
      </section>

      <section className="buttons">
        <Button text="Login" />
        <p className="buttons__text">
          Don't have an account yet?{" "}
          <span className="buttons__link" onClick={handleClick}>
            Sign up here
          </span>
        </p>
      </section>
    </section>
  );
};

export default Login;
