import { useEffect, useState } from "react";
import Movie from "../components/Movie";
import styles from "./Home.module.css";
import Loading from "../components/Loading";
import Pagination from "../components/Pagination";
import Title from "../components/Title";

function Home() {
  const [loading, setLoading] = useState(true);
  const [movies, setMovies] = useState([]);
  const [pages, setPages] = useState();
  const [page, setPage] = useState(1);

  const totalPages = Math.ceil(pages / 20);

  const getMovies = async (currentPage) => {
    const json = await (
      await fetch(
        `https://yts.mx/api/v2/list_movies.json?minimum_rating=8.5&sort_by=year&page=${currentPage}`
      )
    ).json();
    setMovies(json.data.movies);
    setPages(json.data.movie_count);
    setLoading(false);
  };
  useEffect(() => {
    getMovies(page);
  }, [page]);
  return (
    <div className={styles.home}>
      {loading ? (
        <Loading />
      ) : (
        <>
          <Title pages={pages} />
          <div className={styles.home__container}>
            {movies.map((movie) => (
              <Movie
                key={movie.id}
                id={movie.id}
                mediumCoverImage={movie.medium_cover_image}
                title={movie.title}
                rating={movie.rating}
                year={movie.year}
              />
            ))}
          </div>
          <Pagination setPage={setPage} page={page} totalPages={totalPages} />
        </>
      )}
    </div>
  );
}

export default Home;
