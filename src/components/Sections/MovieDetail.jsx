import { useEffect, useState } from 'react';
import { Link, Outlet, useLocation, useParams } from 'react-router-dom';
import { fetchMovieDetails } from 'components/API/API';
import Notiflix from 'notiflix';
import css from '../Styles/MovieDetails.module.css';

export const MovieDetails = () => {
  const [movieDetails, setMovieDetails] = useState({});
  const { movieId } = useParams();
  const location = useLocation();

  const backLink = location.state?.from ?? '/movies';

  useEffect(() => {
    if (!movieId) return;
    fetchMovieDetails(movieId)
      .then(results => {
        setMovieDetails(results);
      })
      .catch(() => {
        Notiflix.Notify.failure('Error fetching data');
      });
  }, [movieId]);

  const { title, overview, vote_average, release_date, poster_path } =
    movieDetails;
  return (
    <main className={css.section}>
      <Link to={backLink}>
        <div className={css.back}>Back</div>
      </Link>
      {movieDetails && (
        <>
          <div className={css.movie}>
            <div>
              <img
                className={css.img}
                src={`https://image.tmdb.org/t/p/w300\\${poster_path}`}
                alt="Movie Poster"
              />
            </div>
            <div className={css.movieDetails}>
              <h3 className={css.movieTitle}>{title}</h3>
              <div>
                <p>
                  {movieDetails.genres &&
                    movieDetails.genres.map(genre => genre.name).join(', ')}
                </p>
              </div>
              <div>
                <h6>Overview</h6>
                <p>{overview}</p>
              </div>
              <div>
                <h6>Release date</h6>
                <p>{release_date}</p>
              </div>
              <div>
                <h6>Average rating</h6>
                <p>{vote_average} / 10</p>
              </div>
            </div>
          </div>
          <div className={css.extendedDiv}>
            <Link to={`/movies/${movieId}/cast`}>
              <p className={css.extended}>Cast</p>
            </Link>
            <Link to={`/movies/${movieId}/reviews`}>
              <p className={css.extended}>Reviews</p>
            </Link>
          </div>
        </>
      )}
      <Outlet />
    </main>
  );
};
