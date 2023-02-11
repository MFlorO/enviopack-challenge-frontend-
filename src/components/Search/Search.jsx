import {useState} from 'react'
import { useProductContext } from "~/data/productContext";
import styles from "./Search.module.css"

const Search = () => {

  const [productState, productCopia, setProductCopia] = useProductContext();

  const [search, setSearch] = useState("")


  const onSearchChange = (event) => setSearch((event.target.value).toUpperCase())


  const filtrar = (search) => {

    const funcion = (e) =>  e.title.toString().toUpperCase().includes(search)

    if (productCopia && productCopia.length === productState.length){  //Caso: Busco por primera vez

      const resultados = productCopia?.filter( (e) => funcion(e)) 

      resultados.length > 0 ? setProductCopia(resultados) :  setProductCopia("")  //Busco y NO hay coincidencias --> Esto utilizo para el boton de TRY AGAIN
                                 //Busco y hay concidencias: Muestro la copia con los resultados 

    } else {  //Caso: Busco por segunda vez o más

      const resultados = productState.filter( (e) => funcion(e)) //Filtro el original
      
      resultados.length > 0 ? setProductCopia(resultados) :  setProductCopia("")
    }
  };


  const handleSubmit = (event) => {
    event.preventDefault(); 
	  filtrar(search.trim());
    setSearch("");
  };


  return (
    
    <form onSubmit={handleSubmit} className={styles.conteiner}>
      <input 
        type="text"
        placeholder="Buscar productos por nombre "
        value={search}
        onChange={onSearchChange}
        disabled={!productCopia} 
      />
      
    </form>
  )
};


export default Search