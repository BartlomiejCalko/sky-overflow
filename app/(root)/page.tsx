import { auth, signOut } from "@/auth";
import { Button } from "@/components/ui/button";
import React from "react";
import ROUTES from "@/constants/routes";

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
