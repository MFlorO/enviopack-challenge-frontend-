import { GrFormNext, GrFormPrevious } from "react-icons/gr";
import { useProductContext } from "~/data/productContext";
import styles from "./Paginated.module.css"


const Paginated = () => {

  const [, , , , , , , currentPage, setCurrentPage, itemsPerPage] = useProductContext();

  const previuos = () => currentPage > 0 && setCurrentPage(currentPage - itemsPerPage);

  const next = () => setCurrentPage(currentPage + itemsPerPage);

  return (
    <div className={styles.conteiner}>
      <button onClick={previuos}><GrFormPrevious /></button>
      <button onClick={next}><GrFormNext /></button>
    </div>
  );
};

export default Paginated;
