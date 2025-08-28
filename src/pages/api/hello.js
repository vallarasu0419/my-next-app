// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default function handler(req, res) {
  const { query } = req;

  if (query.name === "vallarasu") {
    return res.status(200).json({ name: "vallarasu" });
  }

  return res.status(200).json({ name: "John Doe" });
}
