import PropTypes from "prop-types";
import ReactPlayer from "react-player";
import styles from "./MovieDetail.module.css";
import More from "./More";
import { useState } from "react";
import Less from "./Less";
import img from "../img/nothing.jpg";

function MovieDetail({
  title,
  descriptionFull,
  rating,
  genres,
  largeCoverImage,
  runtime,
  ytTrailerCode,
  year,
}) {
  const [showTrailer, setShowTrailer] = useState(true);
  const [showDesc, setShowDesc] = useState(false);
  const formatRuntime = (minutes) => {
    const hours = Math.floor(minutes / 60);
    const mins = minutes % 60;
    return hours > 0
      ? mins > 0
        ? `${hours}h ${mins}m`
        : `${hours}h`
      : mins > 0
      ? `${mins}m`
      : null;
  };

  function moreClick() {
    setShowTrailer(false);
    setShowDesc(true);
  }

  function lessClick() {
    setShowTrailer(true);
    setShowDesc(false);
  }

  const [imgSrc, setImgSrc] = useState(largeCoverImage);
  function handleError() {
    setImgSrc(img);
  }
  return (
    <div className={styles.detail__container}>
      <div className={styles.detail__container2}>
        <img
          src={imgSrc}
          className={styles.detail__lgimg}
          alt={title}
          onError={handleError}
        />

        <div className={styles.detail__info}>
          <div className={styles.detail__title}>{title}</div>
          <div className={styles.detail__year}>
            <span>{year} · </span>
            {genres.map((g, index) => (
              <span key={index}>
                {g}
                {index !== genres.length - 1 && "/"}
              </span>
            ))}
          </div>

          <div className={styles.detail__runtime}>{formatRuntime(runtime)}</div>
          <div className={styles.detail__rating}>
            <span style={{ color: "#ff476f" }}>★</span> {rating}
          </div>
          {descriptionFull === "" ? null : (
            <div className={styles.detail__desc}>
              {descriptionFull.length > 410 ? (
                <>
                  {descriptionFull.slice(0, 410)}
                  {!showDesc && <More onClick={moreClick} />}
                  {showDesc && (
                    <>
                      {descriptionFull.slice(410)} <Less onClick={lessClick} />
                    </>
                  )}
                </>
              ) : (
                descriptionFull
              )}
            </div>
          )}

          {ytTrailerCode && showTrailer ? (
            <div>
              <div className={styles.detail__trailer}>Trailer</div>
              <ReactPlayer
                url={`https://www.youtube.com/watch?v=${ytTrailerCode}`}
                width="420px"
                height="236px"
              ></ReactPlayer>
            </div>
          ) : null}
        </div>
      </div>
    </div>
  );
}
MovieDetail.propTypes = {
  title: PropTypes.string.isRequired,
  largeCoverImage: PropTypes.string.isRequired,
  descriptionFull: PropTypes.string.isRequired,
  rating: PropTypes.number.isRequired,
  genres: PropTypes.string.isRequired,
  runtime: PropTypes.number.isRequired,
  ytTrailerCode: PropTypes.string.isRequired,
};
export default MovieDetail;
