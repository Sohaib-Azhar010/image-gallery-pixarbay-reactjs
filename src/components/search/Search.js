import React from "react";

const Search = ({ query, setQuery }) => {
  return (
    <form className="input-group my-5 mx-auto w-100" onSubmit={(e) => e.preventDefault()}>
      <input
        type="text"
        className="form-control form-control-lg"
        placeholder="Search for stunning images..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <button className="btn btn-info btn-lg text-light" type="submit" disabled>
        <i className="bi bi-search"></i> Search
      </button>
    </form>
  );
};

export default Search;
