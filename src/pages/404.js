import Image from "next/image";
import React from "react";
import { Chip } from "@mui/material";
import { useRouter } from "next/router";

const PageNotFound = () => {
  const router = useRouter();

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <div style={{ textAlign: "center" }}>
        <Image
          src="/PageNotFound.svg"
          alt="Page Not Found"
          width={450}
          height={450}
          style={{ maxWidth: "100%", height: "auto" }}
        />
      </div>
      <Chip
        label="Go Home"
        // color="primary"
        clickable
        onClick={() => router.push("/")}
        // style={{ marginTop: "20px" }}
      />
    </div>
  );
};

export default PageNotFound;
