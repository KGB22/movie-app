import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import styles from "./Movie.module.css";
import { useState } from "react";
import img from "../img/nothing.jpg";

function Movie({ mediumCoverImage, title, rating, id, year }) {
  const [imgSrc, setImgSrc] = useState(mediumCoverImage);
  const handleError = () => {
    setImgSrc(img);
  };

  return (
    <div className={styles.movie__container}>
      <Link to={`/movie/${id}`} className={styles.movie__text}>
        <div className={styles.movie__info}>
          <img
            src={imgSrc}
            className={`${styles.movie__img} ${
              imgSrc === img ? styles.movie__defaultImg : ""
            }`}
            alt={title}
            onError={handleError}
          />
        </div>
        <div className={styles.movie__info}>
          <div className={styles.movie__title}>
            {title.length > 25 ? `${title.slice(0, 25)}...` : title}
          </div>
          <div className={styles.movie__year}>{year}</div>
          <div className={styles.movie__rating}>평균 ★ {rating}</div>
        </div>
      </Link>
    </div>
  );
}
Movie.propTypes = {
  id: PropTypes.number.isRequired,
  mediumCoverImage: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  rating: PropTypes.number.isRequired,
  year: PropTypes.number.isRequired,
};

export default Movie;
