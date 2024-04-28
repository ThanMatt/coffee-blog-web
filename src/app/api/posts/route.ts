import { NextApiRequest, NextApiResponse } from "next";

export async function GET(req: NextApiRequest, res: NextApiResponse) {
  try {
    const response = await fetch("http://api:8000/api/blog-post");
    const posts = await response.json();
    return Response.json({ posts });
  } catch (error) {
    res.status(400).json(error);
  }
}
