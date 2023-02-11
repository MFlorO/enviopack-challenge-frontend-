import { NavBar } from "~/components";
import styles from "./Shopping.module.css";
import {ButtonShopping, Car} from "~/components//";



const Shopping = () => {
  return (
  <div className={styles.container}>
      <NavBar />
      <div className={styles.container2}>
        <Car />
      </div>
      <div className={styles.container3}>
        <ButtonShopping />
      </div>
  </div>
  );
};

export default Shopping;
