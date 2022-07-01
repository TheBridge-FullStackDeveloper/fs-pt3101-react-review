import "../styles.scss";
import { useRef } from "react";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useRegister } from "hooks";
import images from "utils/imgLoader";

import Input from "components/input";
import Button from "components/button";

const Register = () => {
  const submitRef = useRef(null);
  const navigate = useNavigate();
  const { handleSubmit, register } = useForm();
  const signup = useRegister({ onSuccess: () => navigate("/login") });

  const handleClick = () => navigate("/login");
  const handleButton = () => submitRef.current.click();

  const onSubmit = (data) => {
    signup(data);
  };

  return (
    <section className="login">
      <section className="icon">
        <img src={images.pokeballIcon} alt="pokeball icon" />
      </section>

      <form onSubmit={handleSubmit(onSubmit)} className="inputs">
        <Input placeholder="email" fn={() => register("email")} />
        <Input placeholder="username" fn={() => register("username")} />
        <Input
          type="password"
          placeholder="password"
          fn={() => register("password")}
        />
        <input
          ref={submitRef}
          style={{ position: "absolute", visibility: "hidden" }}
          type="submit"
        />
      </form>

      <section className="buttons">
        <Button handleClick={handleButton} text="Sign up" />
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

export default Register;
