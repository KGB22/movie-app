import styles from "./Pagination.module.css";
function Pagination({ setPage, page, totalPages }) {
  return (
    <div className={styles.page}>
      <span onClick={() => setPage(1)} disabled={page === 1}>
        «
      </span>
      <span
        onClick={() => setPage((prev) => Math.max(prev - 1, 1))} // prev - 1과 1중 더 큰 것
        disabled={page === 1}
      >
        ‹
      </span>
      {Array.from({ length: totalPages }, (_, i) => (
        <span
          key={i}
          onClick={() => setPage(i + 1)}
          className={page === i + 1 ? styles.accent : null}
        >
          {i + 1}
        </span>
      ))}
      <span
        onClick={() => setPage((prev) => Math.min(prev + 1, totalPages))}
        disabled={page === totalPages}
      >
        ›
      </span>
      <span onClick={() => setPage(totalPages)} disabled={page === totalPages}>
        »
      </span>
    </div>
  );
}
export default Pagination;
