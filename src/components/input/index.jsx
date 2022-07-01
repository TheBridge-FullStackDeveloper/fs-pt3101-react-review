import "./styles.scss";

const Input = ({ position, small, fn = () => {}, ...props }) => {
  return (
    <section
      className={`input ${position && `input--${position}`} ${
        small && `input--small`
      }`}
    >
      <input autoComplete="off" className="input__text" {...fn()} {...props} />
    </section>
  );
};

export default Input;
