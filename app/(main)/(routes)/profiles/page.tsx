import React from "react";
import { redirect } from "next/navigation";
import { getServerSession } from "next-auth";
import Profiles from "@/components/profiles/Profiles";
import { authOptions } from "@/lib/authOptions";

const ProfilesPage = async () => {
  const session = await getServerSession(authOptions);

  if (!session) {
    redirect("/auth");
  }
  return <Profiles />;
};

export default ProfilesPage;
