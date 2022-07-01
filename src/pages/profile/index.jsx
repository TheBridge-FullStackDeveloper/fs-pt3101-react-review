import "./styles.scss";
import { useNavigate } from "react-router-dom";

import Header from "components/header";
import Input from "components/input";
import Title from "components/title";
import Button from "components/button";

const Profile = () => {
  const navigate = useNavigate();

  const handleClick = () => navigate("/pokedex");

  return (
    <section className="profile">
      <Header title="Profile">
        <p onClick={handleClick}>pokédex</p>
        <p>logout</p>
      </Header>

      <section className="form standard-form">
        <Input placeholder="username" />
        <Input placeholder="email" />
        <Input placeholder="role" />
        <section className="form__buttons">
          <Button text="Update" />
        </section>
      </section>

      <section className="form password-form">
        <Title size="xxl">Change your password</Title>
        <Input type="password" placeholder="password" />
        <Input type="password" placeholder="new password" />
        <section className="form__buttons">
          <Button text="Update" />
        </section>
      </section>
    </section>
  );
};

export default Profile;
