/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useState } from "react";

const Search = (props: any) => {
  const [searchInput, setSearchInput] = useState<string>();

  const handleChangeInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchInput(event.target.value);
  };

  const handleSearch = (event: React.MouseEvent<HTMLElement>) => {
    event.preventDefault();
    props.handleSearch(searchInput);
  };
  const handleSearchByEnter = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    props.handleSearch(searchInput);
  };

  return (
    <form
      onSubmit={handleSearchByEnter}
      className="flex items-center border border-solid rounded-full border-black sm:my-5 w-full mt-5 lg:w-1/3 lg:mt-5 md:w-1/2 md:pl-4 pr-3 pl-3"
    >
      <button
        type="submit"
        id="search-btn"
        onClick={handleSearch}
        className="flex-none p-2 border-gray-900"
      >
        <svg
          aria-hidden="true"
          className="w-5 h-5 text-gray-500 dark:text-gray-400"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
            clipRule="evenodd"
          ></path>
        </svg>
      </button>
      <input
        type="search"
        id="search-input"
        className="w-5/6 focus:outline-none"
        onChange={handleChangeInput}
        name="search"
        value={searchInput}
      />
    </form>
  );
};

export default Search;
