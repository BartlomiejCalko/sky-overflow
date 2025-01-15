import { auth, signOut } from "@/auth";
import React from "react";

const Home = async () => {
  const session = await auth();

  console.log(session);

  return (
    <>
      <h1 className="text-3xl font-bold">Welcome to SkyOverflow</h1>
    </>
  );
};

export default Home;
