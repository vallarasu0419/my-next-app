import { useEffect } from "react";
import "@/styles/globals.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Box } from "@mui/material";

export default function App({ Component, pageProps }) {
  // useEffect(() => {
  //   import("bootstrap/dist/js/bootstrap.bundle.min.js");
  // }, []);

  return  <>
      <Header />
      <Box sx={{padding:10}}>
          <Component {...pageProps} />
      </Box>
    
      <Footer />
    </>;
}
