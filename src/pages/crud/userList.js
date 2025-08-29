import Head from "next/head";
import React from "react";
import useragent from "useragent"; // npm i useragent
// import { FixedSizeList as List } from "react-window";

const UserList = ({ deviceInfo, users }) => {
  return (
    <>
      <Head>
        <title>Next App | User List</title>
        <meta name="user list" content="vallarasu next user list" />
      </Head>
      <div>
        <h1>User List</h1>
        {users && users.length > 0 ? (
          <pre>{JSON.stringify(users, null, 2)}</pre>
        ) : (
          <p>No users found.</p>
        )}
      </div>
      <div>
        <h2>Device Info</h2>
        <pre>{JSON.stringify(deviceInfo, null, 2)}</pre>
      </div>
      {/* <List height={500} itemCount={users.length} itemSize={35} width={800}>
        {({ index, style }) => <div style={style}>{users[index].name}</div>}
      </List> */}
    </>
  );
};

// Only one getServerSideProps combining both tasks
export async function getServerSideProps(context) {
  // --- Fetch users from your API ---
  let users = [];
  try {
    const res = await fetch("http://localhost:8000/api/users/users");
    const data = await res.json();
    users = data.success ? data.users : [];
  } catch (error) {
    console.error("❌ Failed to fetch users:", error.message);
  }

  // --- Parse device info from user-agent ---
  const uaString = context.req.headers["user-agent"] || "";
  const ua = useragent.parse(uaString);

  const deviceInfo = {
    browser: ua.family,
    version: ua.toVersion(),
    os: ua.os.toString(),
    device: ua.device.toString(),
  };

  return {
    props: {
      users,
      deviceInfo,
    },
  };
}

export default UserList;
