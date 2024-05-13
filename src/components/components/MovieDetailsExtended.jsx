import { fetchMovieCast, fetchMovieReviews } from 'components/API/API';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Notiflix from 'notiflix';
import css from '../Styles/MovieDetailsExtended.module.css';

export const Cast = () => {
  const [movieCast, setMovieCast] = useState([]);
  const { movieId } = useParams();

  useEffect(() => {
    if (!movieId) return;
    fetchMovieCast(movieId)
      .then(results => {
        setMovieCast(results.cast);
      })
      .catch(() => {
        Notiflix.Notify.failure('Error fetching data');
      });
  }, [movieId]);

  return (
    <>
      <h4>Cast</h4>
      <div>
        {movieCast.length > 0 ? (
          <ul>
            {movieCast.map(castMember => (
              <li key={castMember.id}>{castMember.name}</li>
            ))}
          </ul>
        ) : (
          <h4>No cast information available.</h4>
        )}
      </div>
    </>
  );
};

export const Reviews = () => {
  const [movieReviews, setMovieReviews] = useState([]);
  const { movieId } = useParams();

  useEffect(() => {
    if (!movieId) return;
    fetchMovieReviews(movieId)
      .then(results => {
        setMovieReviews(results.results);
      })
      .catch(() => {
        Notiflix.Notify.failure('Error fetching data');
      });
  }, [movieId]);

  return (
    <>
      <h4>Review</h4>
      <div>
        {movieReviews.length > 0 ? (
          <ul>
            {movieReviews.map(movieReview => (
              <li key={movieReview.id}>
                <p className={css.author}>
                  Author:
                  <span className={css.reviewer}>
                    {movieReview.author}
                  </span>{' '}
                </p>
                <p>{movieReview.content}</p>
              </li>
            ))}
          </ul>
        ) : (
          <p>This movie does not have any reviews.</p>
        )}
      </div>
    </>
  );
};
