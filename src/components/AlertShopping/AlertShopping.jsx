import { useEffect } from "react";
import { useNavigate } from "react-router";
import { useCar } from "~/Hooks/useHookUser";
import styles from "./AlertShopping.module.css"


const AlertShopping = ({ texto, button, funcion }) => {
  const navigate = useNavigate();

  const [, , , seteCar] = useCar();

  useEffect(() => {
    texto === "La compra se realizo con exito" && seteCar()
  }, [])


  return (
    <div className={styles.container}>
      <h3>{texto}</h3>
      <button onClick={() => navigate(funcion)}>{button}</button>
    </div>
  );
};

export default AlertShopping;
