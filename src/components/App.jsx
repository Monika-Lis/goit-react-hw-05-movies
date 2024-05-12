import { Route, Routes } from 'react-router-dom';
import { TrendingMovies } from './Sections/Trending';
import { Layout } from './Sections/Layout';

export const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<TrendingMovies />} />
        </Route>
      </Routes>
    </div>
  );
};
