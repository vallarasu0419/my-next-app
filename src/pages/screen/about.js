"use client";

import React, { useEffect } from "react";
import { useRouter } from "next/navigation";

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
      <h1>About Page</h1>
      <button onClick={handleNavigate}>Go to Service</button>
    </div>
  );
};

export default About;
