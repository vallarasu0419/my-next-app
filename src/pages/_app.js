import { useEffect } from "react";
import "@/styles/globals.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Box } from "@mui/material";
import Head from "next/head";

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Create | Next App</title>
        <meta name="user list" content="vallarasu next user list" />
      </Head>
      <Header />

      <Box
        sx={{
          minHeight: "calc(100vh - 64px - 64px)",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Component {...pageProps} />
      </Box>

      <Box
        component="footer"
        sx={{
          position: "fixed",
          bottom: 0,
          left: 0,
          width: "100%",
          // bgcolor: "background.paper",
          // boxShadow: 1,
          // py: 2,
          // textAlign: "center",
        }}
      >
        <Footer />
      </Box>
    </>
  );
}
