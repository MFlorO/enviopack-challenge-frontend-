import styles from "./ProductList.module.css";
import { useProductContext } from "~/data/productContext";
import imagen from "~/assets/image-product.jpg";
import { useCar } from "~/Hooks/useHookUser";
import { useNavigate } from "react-router";

const ProductList = () => {
  const navigate = useNavigate();
  const [, productCopia, , , filterProducts] = useProductContext();
  const [shopping, addCar] = useCar();

  const list = filterProducts()?.map((p) => {
    const { id, title, price } = p;
    const productFilterAdd = productCopia?.filter((p) => id === p.id);
    const productFind = shopping?.find((p) => id === p.id);

    return (
      <div key={id} className={styles.subcontainer2}>
        <img src={imagen} alt={title} />
        <h5>{title}</h5>
        <p>${price}</p>
        {productFind ? (<button onClick={() => navigate("/shopping")}>Ver Carrito</button>) 
        : (<button onClick={() => addCar(productFilterAdd)}>Agregar al carrito</button>)}
      </div>
    );
  });

  return (
    <div className={styles.container}>
      {list}
    </div>
  );
};

export default ProductList;
