import React, { createContext, useContext, useState } from "react";

const SearchContext = createContext();

export const useSearch = () => {
  return useContext(SearchContext);
};

export const SearchProvider = ({ children }) => {
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredResults, setFilteredResults] = useState([]);
  const [ogMoviesList, setOGMoviesList] = useState([]);

  const [selectedOptions, setSelectedOptions] = useState([]);
  const [ogOptions, setogOptions] = useState([]);

  const filterData = (search_inp, filter_list)=> {
    if (search_inp === "" && filter_list.length === 0)
        setFilteredResults(ogMoviesList);
    else {
        if (search_inp === "") {
          const valuesList = filter_list.map((item) => item.value);
          const newfilteredResults = ogMoviesList.map((entry) => ({
            ...entry,
            movies: entry.movies.filter((movie) =>
              movie.genre.some((genre) => valuesList.includes(genre))
            ),
          }));
          setFilteredResults(newfilteredResults);
        } else {
          let newfilteredResults = ogMoviesList;
          if (filter_list.length !== 0) {
              const valuesList = filter_list.map((item) => item.value);
              newfilteredResults = ogMoviesList.map((entry) => ({
                ...entry,
                movies: entry.movies.filter((movie) =>
                  movie.genre.some((genre) => valuesList.includes(genre))
                ),
              }));
          }

          newfilteredResults = newfilteredResults.map((entry) => ({
            date: entry.date,
            movies: entry.movies.filter((movie) =>
              movie.title.toLowerCase().includes(search_inp.toLowerCase())
            ),
          }));

          setFilteredResults(newfilteredResults);
        }

  }
}

  const handleSearch = (e) => {
    filterData(e.target.value, selectedOptions)
    setSearchQuery(e.target.value);
  };

  const handleSelection = (val) => {
    filterData(searchQuery, val)
    setSelectedOptions(val);
  };

  return (
    <SearchContext.Provider
      value={{
        searchQuery,
        setSearchQuery,
        filteredResults,
        selectedOptions,
        ogOptions,
        handleSearch,
        handleSelection,
        setFilteredResults,
        setOGMoviesList,
        setogOptions,
        setSelectedOptions,
      }}
    >
      {children}
    </SearchContext.Provider>
  );
};
