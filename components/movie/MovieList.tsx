"use client";

import React from "react";

import { isEmpty } from "lodash";
import useMoviesList from "@/hooks/useMoviesList";
import Movies from "./Movies";
import useFavorites from "@/hooks/useFavorites";

const MovieList = () => {
  const { data: movies = [] } = useMoviesList();
  const { data: favories = [] } = useFavorites();

  if (isEmpty(movies)) {
    return null;
  }
  return (
    <div className="pb-40">
      <Movies title="Trending Now" data={movies} />
      <Movies title="My List" data={favories} />
    </div>
  );
};

export default MovieList;
