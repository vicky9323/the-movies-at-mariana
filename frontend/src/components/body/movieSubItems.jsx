import React from "react";

const MovieSubItems = ({ obj, keys }) => {
  const { title, released, runtime, meta_score, poster, genre, Ratings } = obj;

  return (
    <div className="h-auto w-full font-semibold my-4 text-justify shadow-md rounded-2xl bg-white hover:scale-105 duration-300 ">
      <img
        className="rounded-2xl w-full h-[400px] rounded-bl rounded-br"
        src={poster}
        alt={title}
        onError={({ currentTarget }) => {
          currentTarget.onerror = null; // prevents looping
          currentTarget.src = "images/poster_fallback.png";
        }}
      />

      <div className="grid grid-cols-4 px-4">
        <h1 className="font-semibold text-2xl grid col-span-3">
          {title}
        </h1>
        <p className="mt-1 text-right">{released.split(" ")[2]}</p>
        <p className="text-green-500 grid col-span-4">
          {genre.join(", ")}
        </p>

        <div className="grid col-span-4 grid-rows-3">
          {Ratings.map((rating) => (
            <p>{`${rating.source} (${rating.value})`}</p>
          ))}
        </div>

        <hr className="grid col-span-4"></hr>
        <p className="grid col-span-2">
          Critic Rating: {meta_score}
        </p>
        <p className="grid col-span-2 text-right">Runtime: {runtime}</p>
      </div>
    </div>
  );
};

export default MovieSubItems;
