import { useState, useEffect } from 'react';
import { Outlet, useSearchParams, Link, useLocation } from 'react-router-dom';
import { SearchBar } from '../components/SearchBar';
import { fetchSearchedMovies } from 'components/API/API';

export const Movies = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [movies, setMovies] = useState([]);
  const [error, setError] = useState(null);

  const query = searchParams.get('query') ?? '';

  const handleSearchQuery = query => {
    const newQuery = query !== '' ? { query } : {};
    setSearchParams(newQuery);
  };

  useEffect(() => {
    fetchSearchedMovies(query, 1)
      .then(({ results }) => {
        setMovies(results);
      })
      .catch(error => setError(error));
  }, [query]);

  const SearchedMovies = ({ movies }) => {
    const locationMovie = useLocation();
    return (
      <div>
        {movies.map(({ id, title }) => (
          <div key={id}>
            <Link to={`/movies/${id}`} state={{ from: locationMovie }}>
              <div>
                <p>{title}</p>
              </div>
            </Link>
          </div>
        ))}
      </div>
    );
  };

  return (
    <main>
      <SearchBar value={query} onSubmit={handleSearchQuery} />
      {error && <p>{error.message}</p>}
      {query && <SearchedMovies movies={movies} />}
      <Outlet />
    </main>
  );
};
