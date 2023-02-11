import styles from "./Loading.module.css"
import loading from "../../assets/loading.webp"

const Loading = () => {
  return (
    <div className={styles.container}>
      <img src={loading} alt="Cargando..." />
    </div>
  )
}

export default Loading