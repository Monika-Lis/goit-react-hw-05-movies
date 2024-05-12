import Notiflix from 'notiflix';
import { useEffect, useState } from 'react';
import { useLocation, Link } from 'react-router-dom';
import { fetchTrending } from 'components/API/API';

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
    <div>
      <h2>Trending Movies</h2>
      <div>
        {trending.map(({ id, title }) => (
          <div className="card" key={id}>
            <Link to={`/movies/${id}`} state={{ from: location }}>
              <div className="info">
                <p className="title">{title}</p>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};
