import prisma from "../../../prisma/client";

import type { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "GET") {
    
    try {
        console.log(req.query);
        
      const data = await prisma.post.findUnique({
        where: {
            id: req.query.details,
        }
      })
    } catch (err) {
      res.status(403).json({ err: "Error has occured while making a post" });
    }
  }
}