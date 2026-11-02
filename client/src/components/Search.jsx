const Search = (props) => {
  return (
    <div className="search-container">
      <input
        type="text"
        placeholder="Looking for..."
        className="search"
        onChange={(event) => {
          props.setsearch(event.target.value);
        }}
      />
    </div>
  );
};

export default Search;
