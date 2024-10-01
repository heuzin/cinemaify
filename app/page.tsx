import { redirect } from "next/navigation";
import { getServerSession } from "next-auth";
import { authOptions } from "./api/auth/[...nextauth]/route";

import Navbar from "@/components/navigation/Navbar";
import MovieList from "@/components/movie/MovieList";
import Billboard from "@/components/billboard/Billboard";
import Modals from "@/components/modals/Modals";

export default async function Home() {
  const session = await getServerSession(authOptions);

  if (!session) {
    redirect("/auth");
  }
  return (
    <>
      <Modals />
      <Navbar />
      <Billboard />
      <MovieList />
    </>
  );
}
