import Head from "next/head";
import { Geist, Geist_Mono } from "next/font/google";
// import styles from "../styles/Home.module.css";
// import Header from "@/components/Header";
// import Footer from "@/components/Footer";
import { Chip, Stack } from "@mui/material";
import { useRouter } from "next/router";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function Home() {
  const router = useRouter();

  const handleClick = () => {
    router.push("/screen/user");
  };

  return (
    <>
      <Head>
        <title>Next App | Home</title>
        <meta name="home" content="vallarasu next home" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div
      // className={`${styles.page} ${geistSans.variable} ${geistMono.variable}`}
      >
        {/* <Header /> */}

        {/* <main> */}
        <h1>Welcome to Next.js 🚀</h1>
        <Stack direction="row" spacing={1}>
          <Chip label="Go To Users" onClick={handleClick} />
        </Stack>
        {/* </main> */}

        {/* <Footer /> */}
      </div>
    </>
  );
}
