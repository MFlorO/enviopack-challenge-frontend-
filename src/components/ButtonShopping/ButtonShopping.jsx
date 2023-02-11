import { useNavigate } from "react-router";

const ButtonShopping = () => {
  const navigate = useNavigate();

  return (
    <>
      <button onClick={() => navigate("/catalogue")}>Volver al catálogo</button>
      <button onClick={() => navigate("/status")}>Finalzar Compra</button>
    </>
  );
};

export default ButtonShopping;
