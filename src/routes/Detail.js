import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Back from "../components/Back";
import MovieDetail from "../components/MovieDetail";
import styles from "./Detail.module.css";
import Loading from "../components/Loading";

function Detail() {
  const { id } = useParams();
  const [loading, setLoading] = useState(true);
  const [movie, setMovie] = useState([]);
  const getMovie = async () => {
    const json = await (
      await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)
    ).json();
    setMovie(json.data.movie);
    setLoading(false);
  };
  useEffect(() => {
    getMovie();
  }, []);
  return (
    <div className={styles.container}>
      {loading ? (
        <Loading />
      ) : (
        <>
          <Back />
          <MovieDetail
            title={movie.title}
            descriptionFull={movie.description_full}
            rating={movie.rating}
            genres={movie.genres}
            runtime={movie.runtime}
            largeCoverImage={movie.large_cover_image}
            ytTrailerCode={movie.yt_trailer_code}
            year={movie.year}
          />
        </>
      )}
    </div>
  );
}
export default Detail;
