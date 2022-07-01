import "./styles.scss";

const Header = ({ title, children }) => {
  return (
    <section className="title">
      <h2>{title}</h2>

      <section
        className={`title__links ${
          children.length ? "title__links--multiple" : "title__links--single"
        }`}
      >
        {children}
      </section>
    </section>
  );
};

export default Header;
