import fetcher from "@/lib/fetcher";
import { Movie } from "@prisma/client";
import useSWR from "swr";

const useBillboard = () => {
  const { data, error, isLoading } = useSWR<Movie, Error>(
    "/api/random",
    fetcher,
    {
      revalidateIfStale: false,
      revalidateOnFocus: false,
      revalidateOnReconnect: false,
    }
  );

  return { data, error, isLoading };
};

export default useBillboard;
