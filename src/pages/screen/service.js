import Head from "next/head";
import { useRouter } from "next/router";

export default function Service() {
  const router = useRouter();
  const { name, role } = router.query;

  return (
    <div>
      <Head>
        <title>Next App | Service</title>
        <meta name="service" content="vallarasu next service" />
      </Head>
      <h1>Service Page</h1>
      <p>Name: {name}</p>
      <p>Role: {role}</p>
    </div>
  );
}
