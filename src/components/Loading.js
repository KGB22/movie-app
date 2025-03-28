import styles from "./Loading.module.css";
import loadingImg from "../img/Loading_icon.gif";
function Loading() {
  return (
    <div className={styles.loading}>
      <img src={loadingImg} alt="loading..." />
    </div>
  );
}
export default Loading;
