import { NavBar } from "~/components";
import styles from "./Catalogue.module.css";
import { ProductList, Search, FilterPrice, Paginated, Loading} from "~/components";
import { useProductContext } from "~/data/productContext";

const Catalogue = () => {

  const [, , , isLoading] = useProductContext();

  return (
    <div className={styles.conteiner}>
      <NavBar />
      <div className={styles.subconteiner}>
        <div className={styles.sub2conteiner}>
          <h1>Catálogo</h1>
          <div className={styles.sub2conteiner2}>
            <Search />
            <FilterPrice />
          </div>
          {isLoading ? 
          <Loading />
          : <>
             <Paginated />
             <ProductList />
            </>
          }
        </div>
      </div>
    </div>
  );
};

export default Catalogue;
