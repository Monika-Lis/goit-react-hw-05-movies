import Notiflix from 'notiflix';
import { useEffect, useState } from 'react';
import { useLocation, Link } from 'react-router-dom';
import { fetchTrending } from 'components/API/API';
import css from '../Styles/Trending.module.css';

export const TrendingMovies = () => {
  const [trending, setTrending] = useState([]);
  const location = useLocation();

  useEffect(() => {
    fetchTrending()
      .then(({ results }) => {
        setTrending(results);
      })
      .catch(() => {
        Notiflix.Notify.failure('Error fetching data');
      });
  }, []);

  return (
    <div className={css.section}>
      <h2>Trending Movies</h2>
      <div className={css.trendingDiv}>
        {trending.map(({ id, title, poster_path }) => (
          <div key={id} className={css.movieDiv}>
            <Link to={`/movies/${id}`} state={{ from: location }}>
              <div className={css.imgDiv}>
                <img
                  alt="movie poster"
                  src={`https://image.tmdb.org/t/p/original/${poster_path}`}
                />
              </div>
              <p className={css.movieTitle}>{title}</p>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};
