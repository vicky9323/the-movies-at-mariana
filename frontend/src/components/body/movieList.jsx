import React, { useEffect, useState } from "react";
import MovieItem from "./movieItem";
import { useSearch } from "../../context/searchContext";

function MovieList() {
  const {
    filteredResults,
    setFilteredResults,
    setOGMoviesList,
    setogOptions,
  } = useSearch();

  const [isFetchingError, setIsFetchingError] = useState(false);
  const [pageLoading, setPageLoading] = useState(true);
  const [fetchDataError, setFetchDataError] = useState('');

  useEffect(() => {
    fetch(`${process.env.REACT_APP_BACKEND_BASE_URL}/movies/`)
      .then((response) => response.json())
      .then((data) => {
        setIsFetchingError(false);
        setOGMoviesList(data);
        setFilteredResults(data);
        let option_list = [],
          options_obj = [];
        data.map((item) => {
          const { movies } = item;
          movies.map((movie) => {
            option_list.push.apply(option_list, movie.genre);
          });
        });

        option_list = new Set([...option_list]);
        option_list.forEach((item) => {
          options_obj.push({ value: item, label: item });
        });
        setogOptions(options_obj);
        setPageLoading(false);
      })
      .catch((error) => {
        setFetchDataError(error.message);
        setPageLoading(false);
        setIsFetchingError(true);
        
      });
  },[]);

  return (
    <>
      {pageLoading?
      <div className="h-[50px] w-[95%] mx-auto bg-slate-300 font-semibold flex items-center justify-center">
      Loading Movies Get Ready...
      </div>
      :
      isFetchingError?
      <div className="h-[50px] w-[95%] mx-auto bg-slate-300 font-semibold flex items-center justify-center">
      {fetchDataError!==''?fetchDataError:'Unable to fetch data from Server! Check Internet Connection'}
      </div>
      :filteredResults.map((list_obj, index) => {
        const { date, movies } = list_obj;
        return <MovieItem key={`Item_${index}`} date={date} list_obj={movies} />;
      })}
    </>
  );
}

export default MovieList;
