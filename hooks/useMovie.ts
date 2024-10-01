import fetcher from "@/lib/fetcher";
import { Movie } from "@prisma/client";
import useSWR from "swr";

const useMovie = (movieId?: string) => {
  const { data, error, isLoading } = useSWR<Movie, Error>(
    movieId ? `/api/movies/${movieId}` : null,
    fetcher,
    {
      revalidateIfStale: false,
      revalidateOnFocus: false,
      revalidateOnReconnect: false,
    }
  );

  return { data, error, isLoading };
};

export default useMovie;
