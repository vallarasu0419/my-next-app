"use client";

import React, { useEffect } from "react";
import { useRouter } from "next/navigation";
import Head from "next/head";
import { Chip } from "@mui/material";

const About = () => {
  const router = useRouter();

  useEffect(() => {
    fetch("/api/hello")
      .then((res) => res.json())
      .then((data) => console.log("Client received:", data));
  }, []);

  const handleNavigate = () => {
    router.push("/screen/service?name=Vikkaraman&role=Developer");
  };

  return (
    <div>
      <Head>
        <title>Next App | About</title>
        <meta name="about" content="vallarasu next about" />
      </Head>
      <h1>About Page</h1>
      <Chip label="Go to Service" clickable onClick={() => handleNavigate()} />
    </div>
  );
};

export default About;
