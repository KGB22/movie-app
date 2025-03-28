import styles from "./Show.module.css";

function Less({ onClick }) {
  return (
    <span className={styles.show} onClick={onClick}>
      ...Show Less
    </span>
  );
}
export default Less;
