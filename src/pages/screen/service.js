import { useRouter } from "next/router";

export default function Service() {
  const router = useRouter();
  const { name, role } = router.query;

  return (
    <div>
      <h1>Service Page</h1>
      <p>Name: {name}</p>
      <p>Role: {role}</p>
    </div>
  );
}
