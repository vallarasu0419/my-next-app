import { connectDB } from "@/lib/db"; 

export default async function handler(req, res) {
  try {
    const connection = await connectDB();
    const [rows] = await connection.execute("SELECT * FROM users");
    await connection.end();

    res.status(200).json({ success: true, users: rows });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
}
