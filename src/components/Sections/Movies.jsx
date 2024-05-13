import Notiflix from 'notiflix';
import { useState, useEffect } from 'react';
import { Outlet, useSearchParams, Link, useLocation } from 'react-router-dom';
import { SearchBar } from '../components/SearchBar';
import { fetchSearchedMovies } from 'components/API/API';
import css from '../Styles/Movies.module.css';

export const Movies = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [movies, setMovies] = useState([]);

  const query = searchParams.get('query') ?? '';

  const onSearch = query => {
    const newQuery = query !== '' ? { query } : {};
    setSearchParams(newQuery);
  };

  useEffect(() => {
    fetchSearchedMovies(query, 1)
      .then(({ results }) => {
        setMovies(results);
      })
      .catch(() => {
        Notiflix.Notify.failure('Error fetching data');
      });
  }, [query]);

  const SearchedMovies = ({ movies }) => {
    const locationMovie = useLocation();
    return (
      <div className={css.searchedDiv}>
        {movies.map(({ id, title, poster_path }) => (
          <div key={id} className={css.movieDiv}>
            <Link to={`/movies/${id}`} state={{ from: locationMovie }}>
              <div className={css.imgDiv}>
                <img
                  alt="movie poster"
                  src={`https://image.tmdb.org/t/p/original/${poster_path}`}
                />
              </div>
              <div>
                <p className={css.movieTitle}>{title}</p>
              </div>
            </Link>
          </div>
        ))}
      </div>
    );
  };

  return (
    <main className={css.section}>
      <SearchBar value={query} onSubmit={onSearch} />
      {query && <SearchedMovies movies={movies} />}
      <Outlet />
    </main>
  );
};
