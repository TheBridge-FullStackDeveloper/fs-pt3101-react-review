import "../styles.scss";
import { useNavigate } from "react-router-dom";
import images from "utils/imgLoader";

import Input from "components/input";
import Button from "components/button";

const Login = () => {
  const navigate = useNavigate();

  const handleClick = () => navigate("/login");

  return (
    <section className="login">
      <section className="icon">
        <img src={images.pokeballIcon} alt="pokeball icon" />
      </section>

      <section className="inputs">
        <Input placeholder="email" />
        <Input placeholder="username" />
        <Input type="password" placeholder="password" />
      </section>

      <section className="buttons">
        <Button text="Sign up" />
        <p className="buttons__text">
          Already have an account?{" "}
          <span className="buttons__link" onClick={handleClick}>
            Log in here
          </span>
        </p>
      </section>
    </section>
  );
};

export default Login;
