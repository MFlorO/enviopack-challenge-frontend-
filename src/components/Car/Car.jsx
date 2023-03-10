import styles from "~/pages/Shopping/Shopping.module.css";
import { useCar } from "~/Hooks/useHookUser";
import useHookShopping from "~/Hooks/useHookShopping";
import imagen from "~/assets/image-product.jpg";

const Car = () => {
  const [shopping, , deleteCar] = useCar();


  return (
    <>
      <h1>Carrito</h1>

      <ul className={styles.containar2sub1}>

        {shopping?.length === 0 && "NO HAY PRODUCTOS CARGADOS EN EL CARRITO" }

        {shopping?.map((s) => {
          const { id, title, price } = s;
          return (
            <li key={id} >   
              <div className={styles.sub}>
                <img src={imagen} alt={title} />
                <h4>{title}</h4>
              </div>
              <div className={styles.sub2}>
                <p>$ {price}</p>
                <button onClick={() => deleteCar(id)}>X</button>
              </div>
            </li>
          );
        })}
      </ul>

      <div className={styles.containar2sub2}>
        <span>Total</span>
        <span>$ {useHookShopping()}</span>
      </div>
    </>
  );
};

export default Car;
