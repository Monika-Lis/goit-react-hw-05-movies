import { Route, Routes } from 'react-router-dom';
import { TrendingMovies } from './Sections/Trending';

export const App = () => {
  return (
    <div>
      <Routes>
        <Route index element={<TrendingMovies />} />
      </Routes>
    </div>
  );
};
