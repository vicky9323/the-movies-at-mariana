import React from "react";
import MovieSubItems from "./movieSubItems";
import { v4 as uuidv4 } from 'uuid';

const MovieItem = ({ list_obj, date }) => {
  function formatDate(inputDate) {
    const date = new Date(inputDate);
    const monthNames = [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ];
    const day = date.getDate();
    const month = monthNames[date.getMonth()];
    const year = date.getFullYear();
    const formattedDate = `${day} ${month}, ${year}`;
    return formattedDate;
  }

  return (
    <>
      <div className="h-[50px] w-[95%] mx-auto my-3 bg-slate-300 font-semibold flex items-center justify-center">
        <span>Movies For Day: {formatDate(date)}</span>
      </div>
      <div className="container mx-auto w-[95%] grid lg:grid-cols-3 sm:grid-cols-1 md:grid-cols-2  gap-8">
        {list_obj.map((obj) => {
          return <MovieSubItems key={uuidv4()} obj={obj} />;
        })}
      </div>
    </>
  );
};

export default MovieItem;
