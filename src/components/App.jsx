import { Route, Routes } from 'react-router-dom';
import { TrendingMovies } from './Sections/Trending';
import { Layout } from './Sections/Layout';
import { Movies } from './Sections/Movies';
import { MovieDetails } from './Sections/MovieDetail';
import { Cast, Reviews } from './components/MovieDetailsExtended';

export const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<TrendingMovies />} />
          <Route path="/movies" element={<Movies />} />
          <Route path="/movies/:movieId" element={<MovieDetails />}>
            <Route path="cast" element={<Cast />} />
            <Route path="reviews" element={<Reviews />} />
          </Route>
          <Route path="*" element={<TrendingMovies />} />
        </Route>
      </Routes>
    </div>
  );
};
