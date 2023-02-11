import { useEffect, useState, createContext, useContext } from "react";
import products from "~/api/products.json";

export const ProductContext = createContext({});

export const ProductProvider = ({ children }) => {
  const [productState, setProductState] = useState([]);
  const [productCopia, setProductCopia] = useState([]); //Creo una copia de la "data" para trabajar
  const [isLoading, setIsLoading] = useState(true); //Estado para saber el "status" de la aplicacion"

  useEffect(() => {
    setTimeout(() => {
      setProductState(products.productos);
      setProductCopia(products.productos);
      setIsLoading(false);
    }, 3000);
  }, []);


  const [filters, setFilters] = useState("")

  const [currentPage, setCurrentPage] = useState(0); //Estado para manejar la pagina

  const itemsPerPage = 6;


  //PAGINADO Y FILTRADO
  let filterProducts = () => { 

    function sort () {
      return [...productCopia].sort((a,b) =>{

        if(filters === "Mayor"){
            return  a.price > b.price? -1 : 1
        }
        if(filters === "Menor"){
            return  a.price > b.price? 1 : -1
        }
        return 0;
    })
    }

    return sort().slice(currentPage, currentPage + itemsPerPage)
   
  };

  if (!productState) {
    return;
  }

  return (
    <ProductContext.Provider
      value={[productState, productCopia, setProductCopia, isLoading, filterProducts, filters, setFilters, currentPage, setCurrentPage, itemsPerPage]}
    >
      {children}
    </ProductContext.Provider>
  );
};

export const useProductContext = () => {
  const Context = useContext(ProductContext);

  if (Context === undefined) {
    throw Error("Esta fuera del contexto");
  }

  return Context;
};
