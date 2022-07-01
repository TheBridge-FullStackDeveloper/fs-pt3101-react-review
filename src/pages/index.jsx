import { Outlet } from "react-router-dom";
import { useEffect } from "react";
import { useGetter } from "store";

const Main = () => {
  const { setPokedex } = useGetter();

  useEffect(() => {
    setPokedex();
  }, []);

  return <Outlet />;
};

export default Main;
