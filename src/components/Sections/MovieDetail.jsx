import { useEffect, useState } from 'react';
import { Link, Outlet, useLocation, useParams } from 'react-router-dom';
import { fetchMovieDetails } from 'components/API/API';

export const MovieDetails = () => {
  const [movieDetails, setMovieDetails] = useState({});
  const [error, setError] = useState(null);
  const { movieId } = useParams();
  const location = useLocation();

  const backLink = location.state?.from ?? '/movies';

  useEffect(() => {
    if (!movieId) return;
    fetchMovieDetails(movieId)
      .then(results => {
        setMovieDetails(results);
      })
      .catch(error => {
        setError(error);
      });
  }, [movieId]);

  const { poster_path, title, overview, vote_average, release_date } =
    movieDetails;
  let genresList = '';
  return (
    <main>
      <Link to={backLink}>Back</Link>
      <h2>Movie details</h2>
      {error && <p>{error.message}</p>}
      {movieDetails && (
        <>
          <div>
            <div>
              <img
                src={`https://image.tmdb.org/t/p/w300\\${poster_path}`}
                alt="Movie Poster"
              />
            </div>
            <div>
              <h3>{title}</h3>
              <div>
                <p>{genresList}</p>
              </div>
              <div>
                <p>Overview</p>
                <p>{overview}</p>
              </div>
              <div>
                <p>Release date</p>
                <p>{release_date}</p>
              </div>
              <div>
                <p>Average rating</p>
                <p>{vote_average} / 10</p>
              </div>
            </div>
          </div>
          <div>
            <Link to={`/movies/${movieId}/cast`}>Cast</Link>
            <Link to={`/movies/${movieId}/reviews`}>Reviews</Link>
          </div>
        </>
      )}
      <Outlet />
    </main>
  );
};
