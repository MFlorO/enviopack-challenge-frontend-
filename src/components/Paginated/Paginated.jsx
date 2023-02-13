import { GrFormNext, GrFormPrevious } from "react-icons/gr";
import { useProductContext } from "~/data/productContext";
import styles from "./Paginated.module.css"


const Paginated = () => {

  const [, , , , filterProducts, , , currentPage, setCurrentPage, itemsPerPage] = useProductContext();

  const previuos = () => currentPage > 0 && setCurrentPage(currentPage - itemsPerPage);

  const next = () => setCurrentPage(currentPage + itemsPerPage);

  const page = currentPage === 0 ? currentPage + 1 : (currentPage / itemsPerPage) + 1

	const disabledPreviuos = page !== 1
  const disabledNext = filterProducts().length < itemsPerPage
  
  return (
    <div className={styles.conteiner}>
      <button onClick={previuos} disabled={!disabledPreviuos}><GrFormPrevious /></button>
      <button onClick={next} disabled={disabledNext}><GrFormNext /></button>
    </div>
  );
};

export default Paginated;
