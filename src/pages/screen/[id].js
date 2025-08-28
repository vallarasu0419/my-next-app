import React from "react";

// // This function runs at build time to generate paths for each user
// export async function getServerSideProps({ params }) {
//   const { id } = params; // dynamic id from URL

//   console.log("00000000", params);

//   // Fetch user data from API using the id
//   const res = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);
//   const user = await res.json();

//   return {
//     props: { user },
//   };
// }

export async function getStaticPaths() {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  const users = await res.json();

  const paths = users.map((user) => ({
    params: { id: user.id.toString() }, // must be string
  }));

  return {
    paths,
    fallback: false, // false = show 404 if not found
  };
}

// This function fetches data for each user by id
export const getStaticProps = async ({ params }) => {
  console.log("---------", params);

  const res = await fetch(
    `https://jsonplaceholder.typicode.com/users/${params.id}`
  );
  const user = await res.json();

  return {
    props: { user },
    revalidate: 10, // ISR: page will be regenerated every 10 seconds in the background
  };
};

const UserDetails = ({ user }) => {
  return (
    <div style={{ padding: "20px" }}>
      <h2>User Details</h2>
      <p>
        <strong>Name:</strong> {user.name}
      </p>
      <p>
        <strong>Email:</strong> {user.email}
      </p>
      <p>
        <strong>Phone:</strong> {user.phone}
      </p>
      <p>
        <strong>Website:</strong> {user.website}
      </p>
    </div>
  );
};

export default UserDetails;
