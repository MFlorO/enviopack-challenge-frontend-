import { useProductContext } from "~/data/productContext";
import styles from "./FilterPrice.module.css"



const FilterPrice = () => {

  const [, , , , , , setFilters ] = useProductContext();

  const onSelectionchange = (event) => setFilters(event.target.value);

  return (
    <div className={styles.container}>
      <h5>ORDENAR POR</h5>
      <select name="select" onChange={onSelectionchange}>
        <option value="Todos" defaultValue>Seleccionar</option>
        <option value="Menor">Menor Precio</option>
        <option value="Mayor">Mayor precio</option>
      </select>
    </div>
  );
};

export default FilterPrice;
