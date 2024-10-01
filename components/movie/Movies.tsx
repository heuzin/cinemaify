"use client";

import React from "react";

import { isEmpty } from "lodash";
import { Movie } from "@prisma/client";
import { MovieCard } from "./MovieCard";

interface MoviesProps {
  title: string;
  data: Movie[];
}

const Movies: React.FC<MoviesProps> = ({ title, data }) => {
  if (isEmpty(data)) {
    return null;
  }
  return (
    <div className="px-4 md:px-12 mt-4 space-y-8">
      <div>
        <p className="text-white text-md md:text-xl lg:text-2xl font-semibold">
          {title}
        </p>
        <div className="grid grid-cols-4 gap-2">
          {data.map((movie: Movie) => (
            <MovieCard key={movie.id} data={movie} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Movies;
