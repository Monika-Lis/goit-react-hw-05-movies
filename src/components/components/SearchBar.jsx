import Notiflix from 'notiflix';
import css from '../Styles/Movies.module.css';
import PropTypes from 'prop-types';

export const SearchBar = ({ query, onSubmit }) => {
  const handleSubmit = event => {
    event.preventDefault();
    const queryWords = event.target.searchInput.value;
    if (queryWords.trim() === '') {
      Notiflix.Notify.warning('Please enter a title!');
      return;
    }
    const newQuery = queryWords.split(' ').join('+');
    onSubmit(newQuery);
    event.currentTarget.reset();
  };

  return (
    <form onSubmit={handleSubmit} className={css.form}>
      <span className={css.text}>Search for movies:</span>
      <input
        className={css.input}
        type="text"
        id="searchInput"
        name="searchInput"
        value={query}
        placeholder="Enter title"
      ></input>
      <button type="submit" className={css.button}>
        Search
      </button>
    </form>
  );
};

SearchBar.propTypes = {
  query: PropTypes.string,
  onSubmit: PropTypes.func,
};
