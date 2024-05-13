import { Route, Routes } from 'react-router-dom';
import { lazy, Suspense } from 'react';
import { TrendingMovies } from './Sections/Trending';
import { Layout } from './Sections/Layout';
import { Loader } from './components/Loader';

const Movies = lazy(() =>
  import('./Sections/Movies').then(module => {
    return { default: module.Movies };
  })
);
const MovieDetails = lazy(() =>
  import('./Sections/MovieDetail').then(module => {
    return { default: module.MovieDetails };
  })
);
const Cast = lazy(() =>
  import('./components/MovieDetailsExtended').then(module => {
    return { default: module.Cast };
  })
);
const Reviews = lazy(() =>
  import('./components/MovieDetailsExtended').then(module => {
    return { default: module.Reviews };
  })
);

export const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<TrendingMovies />} />
          <Route
            path="/movies"
            element={
              <Suspense fallback={<Loader />}>
                <Movies />
              </Suspense>
            }
          />
          <Route
            path="/movies/:movieId"
            element={
              <Suspense fallback={<Loader />}>
                <MovieDetails />
              </Suspense>
            }
          >
            <Route
              path="cast"
              element={
                <Suspense fallback={<Loader />}>
                  <Cast />
                </Suspense>
              }
            />
            <Route
              path="reviews"
              element={
                <Suspense fallback={<Loader />}>
                  <Reviews />
                </Suspense>
              }
            />
          </Route>
          <Route path="*" element={<TrendingMovies />} />
        </Route>
      </Routes>
    </div>
  );
};
