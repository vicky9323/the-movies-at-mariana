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

  const handleSearch = (e) => {
    if (e.target.value === "" && selectedOptions.length === 0) {
      setFilteredResults(ogMoviesList);
    } else {
      if (e.target.value === "") {
        const valuesList = selectedOptions.map((item) => item.value);
        const newfilteredResults = ogMoviesList.map((entry) => ({
          ...entry,
          movies: entry.movies.filter((movie) =>
            movie.genre.some((genre) => valuesList.includes(genre))
          ),
        }));
        setFilteredResults(newfilteredResults);
      } else {
        let newfilteredResults = ogMoviesList;
        if (selectedOptions.length !== 0) {
          const valuesList = selectedOptions.map((item) => item.value);
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
            movie.title.toLowerCase().includes(e.target.value.toLowerCase())
          ),
        }));

        setFilteredResults(newfilteredResults);
      }
    }

    setSearchQuery(e.target.value);
  };

  const handleSelection = (val) => {
    if (searchQuery === "" && val.length === 0) {
      setFilteredResults(ogMoviesList);
    } else {
      if (searchQuery === "") {
        const valuesList = val.map((item) => item.value);
        const newfilteredResults = ogMoviesList.map((entry) => ({
          ...entry,
          movies: entry.movies.filter((movie) =>
            movie.genre.some((genre) => valuesList.includes(genre))
          ),
        }));
        setFilteredResults(newfilteredResults);
      } else {
        const valuesList = val.map((item) => item.value);
        let newfilteredResults = ogMoviesList.map((entry) => ({
          ...entry,
          movies: entry.movies.filter((movie) =>
            movie.genre.some((genre) => valuesList.includes(genre))
          ),
        }));

        newfilteredResults = newfilteredResults.map((entry) => ({
          date: entry.date,
          movies: entry.movies.filter((movie) =>
            movie.title.toLowerCase().includes(searchQuery.toLowerCase())
          ),
        }));

        setFilteredResults(newfilteredResults);
      }
    }
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
