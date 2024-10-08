"use client";

import React, { useCallback } from "react";
import { useRouter } from "next/navigation";

import UserCard from "./UserCard";
import useCurrentUser from "@/hooks/useCurrentUser";

const Profiles = () => {
  const router = useRouter();
  const { data: currentUser } = useCurrentUser();

  const selectProfile = useCallback(() => {
    router.push("/");
  }, [router]);

  if (!currentUser?.name) {
    return null;
  }

  return (
    <div className="flex items-center h-full justify-center">
      <div className="flex flex-col">
        <h1 className="text-3xl md:text-6xl text-white text-center">
          Who&#39;s watching?
        </h1>
        <div className="flex items-center justify-center gap-8 mt-10">
          <div onClick={() => selectProfile()}>
            <UserCard name={currentUser?.name} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profiles;
