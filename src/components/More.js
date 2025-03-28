import styles from "./Show.module.css";
function More({ onClick }) {
  return (
    <span className={styles.show} onClick={onClick}>
      {" "}
      ...Show More
    </span>
  );
}
export default More;
