import { fetchMovieCast, fetchMovieReviews } from 'components/API/API';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

export const Cast = () => {
  const [error, setError] = useState(null);
  const [movieCast, setMovieCast] = useState([]);
  const { movieId } = useParams();

  useEffect(() => {
    if (!movieId) return;
    fetchMovieCast(movieId)
      .then(results => {
        setMovieCast(results.cast);
      })
      .catch(error => {
        setError(error);
      });
  }, [movieId]);

  return (
    <>
      <h4>Cast</h4>
      {error && <p>{error.message}</p>}
      <div>
        {movieCast.length > 0 ? (
          <ul>
            {movieCast.map(castMember => (
              <li key={castMember.id}>{castMember.name}</li>
            ))}
          </ul>
        ) : (
          <p>No cast information available.</p>
        )}
      </div>
    </>
  );
};

export const Reviews = () => {
  const [error, setError] = useState(null);
  const [movieReviews, setMovieReviews] = useState([]);
  const { movieId } = useParams();

  useEffect(() => {
    if (!movieId) return;
    fetchMovieReviews(movieId)
      .then(results => {
        setMovieReviews(results.results);
      })
      .catch(error => {
        setError(error);
      });
  }, [movieId]);

  return (
    <>
      <h4>Review</h4>
      {error && <p>{error.message}</p>}
      <div>
        {movieReviews.length > 0 ? (
          <ul>
            {movieReviews.map(movieReview => (
              <li key={movieReview.id}>
                <p>Author:{movieReview.author}</p>
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
