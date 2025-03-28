import styles from "./Title.module.css";
function Title({ pages }) {
  return (
    <div className={styles.title__container}>
      <span>Movies with the Best Ratings ({pages})</span>
    </div>
  );
}

export default Title;
