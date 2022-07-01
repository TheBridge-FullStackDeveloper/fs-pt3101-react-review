import "./styles.scss";

const Title = ({ children, size }) => {
  return (
    <section className={`subtitle ${size && `subtitle--${size}`}`}>
      <p>{children}</p>
    </section>
  );
};

export default Title;
