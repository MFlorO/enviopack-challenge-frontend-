import styles from "./NavBar.module.css"
import { useUser } from "~/Hooks/useHookUser";
import { Link } from "react-router-dom";



const NavBar = () => {

  const [firstName, credit, shopping ] = useUser() 

  return (
    <div className={styles.conteiner}>
      <div className={styles.subconteiner1}>
        <Link className={styles.link} to="/">Tienda de productos</Link>
      </div>
      <div className={styles.subconteiner2}>
        <h3>{firstName}</h3>
        <Link className={styles.link} to="/shopping">Carrito({shopping?.length})</Link>
        <h3>Credito $ { credit }</h3>
      </div>
    </div>
  )
}

export default NavBar; 