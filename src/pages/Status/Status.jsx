import { NavBar } from "../../components/NavBar";
import AlertShopping from "./AlertShopping";
import styles from "./Status.module.css";
import useHookShopping from "~/Hooks/useHookShopping";
import { useUser } from "~/Hooks/useHookUser";



const Status = () => {

  const [, credit] = useUser()
  

  return (
    <div className={styles.conteiner}>
      <NavBar />
      <h1>Estado de la Compra</h1>

      {credit <= useHookShopping() ? (
        <AlertShopping
          texto={"Ocurrio un error con la compra, revisá que el importe no supere el crédito disponible en tu cuenta"}
          button={"Volver al carrito"}
          funcion={"/shopping"}
        />
      ) : (
        <AlertShopping
          texto={"La compra se realizo con exito"}
          button={"Volver al catálogo"}
          funcion={"/catalogue"}
        />
      )}
    </div>
  );
};

export default Status;
