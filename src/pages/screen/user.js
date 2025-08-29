import React from "react";
import { MenuList, MenuItem, ListItemIcon, ListItemText } from "@mui/material";
import Link from "next/link";
import Head from "next/head";

export const getServerSideProps = async () => {
  try {
    const res = await fetch("https://jsonplaceholder.typicode.com/users", {
      timeout: 10000,
    });

    if (!res.ok) {
      console.error("Failed to fetch users");
    }

    const users = await res.json();

    return { props: { users } };
  } catch (error) {
    console.error("Fetch failed:", error);

    return {
      props: { users: [] },
    };
  }
};

const UserPage = ({ users = [] }) => {
  return (
    <div>
      <Head>
        <title>Next App | User</title>
        <meta name="user" content="vallarasu next user" />
      </Head>
      <h2>Users (from props)</h2>
      <MenuList>
        {users.map((user) => (
          <Link key={user.id} href={`/screen/${user.id}`}>
            {/* <Link key={user.id} href={`/screen/userDetails/?id=${user.id}`}> */}
            <MenuItem>
              <ListItemText>{user.name}</ListItemText>
            </MenuItem>
          </Link>
        ))}
      </MenuList>
    </div>
  );
};

export default UserPage;
