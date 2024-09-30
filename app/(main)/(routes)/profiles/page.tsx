import React from "react";
import { redirect } from "next/navigation";
import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import Profiles from "@/components/profiles/Profiles";

const ProfilesPage = async () => {
  const session = await getServerSession(authOptions);

  if (!session) {
    redirect("/auth");
  }
  return <Profiles />;
};

export default ProfilesPage;
