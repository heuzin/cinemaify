import { redirect } from "next/navigation";
import { authOptions } from "./api/auth/[...nextauth]/route";
import { getServerSession } from "next-auth";
import Navbar from "@/components/navigation/Navbar";

export default async function Home() {
  const session = await getServerSession(authOptions);

  if (!session) {
    redirect("/auth");
  }
  return <Navbar />;
}
