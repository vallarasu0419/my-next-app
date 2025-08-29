import mysql from "mysql2/promise";

export async function connectDB() {
  try {
    const connection = await mysql.createConnection({
      host: "localhost",
      user: "root",
      password: "root",
      database: "my-next-app",
    });

    console.log("✅ Connected successfully to MySQL");
    return connection;
  } catch (error) {
    console.error("❌ Database connection failed:", error.message);
    throw error;
  }
}
