import { useNavigate } from "react-router";
import styles from "./Status.module.css"

const AlertShopping = ({ texto, button, funcion }) => {
  const navigate = useNavigate();
  return (
    <div className={styles.subconteiner}>
      <h3>{texto}</h3>
      <button onClick={() => navigate(funcion)}>{button}</button>
    </div>
  );
};

export default AlertShopping;
