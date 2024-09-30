"use client";

import React from "react";
import { signOut } from "next-auth/react";

const SignOut = () => {
  return (
    <div className="bg-white" onClick={() => signOut()}>
      Singout
    </div>
  );
};

export default SignOut;
