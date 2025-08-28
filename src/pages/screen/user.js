import React from "react";
import { MenuList, MenuItem, ListItemIcon, ListItemText } from "@mui/material";
import Link from "next/link";

export const getServerSideProps = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  const users = await res.json();

  return {
    props: { users },
  };
};

const UserPage = ({ users = [] }) => {
  return (
    <div>
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
