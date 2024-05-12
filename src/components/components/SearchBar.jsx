export const SearchBar = ({ query, onSubmit }) => {
  const handleSubmit = event => {
    event.preventDefault();
    const queryWords = event.target.searchInput.value;
    if (queryWords.trim() === '') {
      alert('Please enter what you are looking for!');
      return;
    }
    const newQuery = queryWords.split(' ').join('+');
    onSubmit(newQuery);
    event.currentTarget.reset();
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <span>Search for movies:</span>
        <input
          type="text"
          id="searchInput"
          name="searchInput"
          value={query}
          placeholder="enter part of title"
        ></input>
        <button type="submit">Search</button>
      </form>
    </>
  );
};
