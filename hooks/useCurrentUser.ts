import fetcher from "@/lib/fetcher";
import { User } from "@prisma/client";
import useSWR from "swr";

const useCurrentUser = () => {
  const { data, error, isLoading, mutate } = useSWR<Partial<User>, Error>(
    "/api/current",
    fetcher
  );
  return {
    data,
    error,
    isLoading,
    mutate,
  };
};

export default useCurrentUser;
