import { Link } from "react-router-dom";
import styles from "./Back.module.css";

function Back() {
  return (
    <Link to="/" className={styles.btn}>
      <span>⬅</span>
    </Link>
  );
}
export default Back;
