import { useNavigate } from "react-router";
import { useCar } from "~/Hooks/useHookUser";


const ButtonShopping = () => {
  const navigate = useNavigate();
  const [shopping] = useCar();

  return (
    <>
      <button onClick={() => navigate("/")}>Volver al catálogo</button>
      <button onClick={() => navigate("/status")} disabled={shopping?.length === 0}>Finalzar Compra</button>
    </>
  );
};

export default ButtonShopping;
