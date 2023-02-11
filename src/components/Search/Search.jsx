import {useState} from 'react'
import { useProductContext } from "~/data/productContext";
import styles from "./Search.module.css"

const Search = () => {

  const [productState, productCopia, setProductCopia] = useProductContext();

  const [search, setSearch] = useState("")

  const onSearchChange = (event) => {
    setSearch((event.target.value).toLowerCase())
    setProductCopia(productState.filter( f => f.title.toLowerCase().includes( search.toLowerCase() )))
  }

  
  return (
    <div className={styles.conteiner}>
      <input 
        type="text"
        placeholder="Buscar productos por nombre "
        value={search}
        onChange={onSearchChange}
        disabled={!productCopia} 
      />
      
    </div>
  )
};


export default Search