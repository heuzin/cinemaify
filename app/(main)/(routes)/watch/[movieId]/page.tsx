"use client";

import React from "react";
import { useRouter } from "next/navigation";
import { AiOutlineArrowLeft } from "react-icons/ai";

import useMovie from "@/hooks/useMovie";

interface MovieIdPageProps {
  params: {
    movieId: string;
    channelId: string;
  };
}

const MovieIdPage: React.FC<MovieIdPageProps> = ({ params: { movieId } }) => {
  const router = useRouter();
  const { data } = useMovie(movieId);

  return (
    <div className="h-screen w-screen bg-black">
      <nav className="fixed w-full p-4 z-10 flex flex-row items-center gap-8 bg-black bg-opacity-70">
        <AiOutlineArrowLeft
          onClick={() => router.push("/")}
          className="text-white cursor-pointer"
          size={36}
        />
        <p className="text-white text-1xl md:text-3xl font-bold">
          <span className="font-light">Whatching: </span>
          {data?.title}
        </p>
      </nav>

      <video
        src={data?.videoUrl}
        autoPlay
        controls
        className="h-full w-full"
      ></video>
    </div>
  );
};

export default MovieIdPage;
